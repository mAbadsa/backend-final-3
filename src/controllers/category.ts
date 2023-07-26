import { getCategories } from '@/services/category';
import { Request, RequestHandler, Response } from 'express';
import { createProductFilter, getProductsByFilter } from '@/services/product';

export const getAllCategories: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
