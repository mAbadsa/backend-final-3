import { RequestHandler, Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '@models/Product';
import { Brand } from '@models/Brand';
import {
  createProductFilter,
  getOneProduct,
  getProductsByFilter,
} from '@services/product';
import { getBrandName } from '@/services/brand';

export const getLimitedEdition: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const FilterData = req.query;
  FilterData.quantity = '20';
  const filter = createProductFilter(FilterData);

  try {
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getPopular: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const FilterData = req.query;
  FilterData.rating = '4.5';
  const filter = createProductFilter(FilterData);

  try {
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getNewArrivals: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const FilterData = req.query;
  FilterData.isNew = '1';
  const filter = createProductFilter(FilterData);

  try {
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getHandpicked: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const filter = createProductFilter({ handpicked: '1' });
  try {
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const getProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const filter = createProductFilter(req.query);

  try {
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const search: RequestHandler = async (req: Request, res: Response) => {
  const { keyword } = req.query;
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Brand,
        },
      ],
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${keyword}%` } },
          { '$brand.name$': { [Op.like]: `%${keyword}%` } },
        ],
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const createProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getBrandProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const myQuery = req.query;
  myQuery.brand_id = id;
  const filter = createProductFilter(myQuery);

  try {
    const products: Product[] = await getProductsByFilter(filter);
    const brandName: String = (await getBrandName(id)).dataValues;
    console.log(brandName);
    return res.status(200).json({ brandName, products });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getCategoryProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const myQuery = req.query;
  myQuery.category_id = id;
  const filter = createProductFilter(myQuery);

  try {
    const products: Product[] = await getProductsByFilter(filter);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getProductById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const _id = parseInt(id);

    const result = await getOneProduct(_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
