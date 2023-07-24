import { createProductFilter, getProductsByFilter } from '@/services/product';
import { getAllBrands } from '@/services/brand';
import { RequestHandler, Request, Response } from 'express';
import { Query } from 'mysql2';

export const getBrands: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getAllBrands();
    return res.status(200).json(result);
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
    const result = await getProductsByFilter(filter);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
