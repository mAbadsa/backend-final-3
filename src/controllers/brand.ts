import { createProductFilter, getProductsByFilter } from '@/services/product';
import { getAllBrands } from '@/services/brand';
import { RequestHandler, Request, Response } from 'express';

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
