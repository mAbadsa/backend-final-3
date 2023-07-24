import { RequestHandler, Request, Response } from 'express';
import { Op } from 'sequelize';


import { Product } from '@models/Product';
import { Brand } from '@models/Brand';
import { createProductFilter, getProductsByFilter } from '@services/product';


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
          { name: { [Op.like]: `%${keyword}%` } },
          { '$brand.name$': { [Op.like]: `%${keyword}%` } },
        ],
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};
