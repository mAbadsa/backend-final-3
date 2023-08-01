import { createProductFilter, getProductsByFilter } from '@/services/product';
import { getAllBrands } from '@/services/brand';
import { RequestHandler, Request, Response } from 'express';
import { createUserOrder, getAllUserOrders } from '@/services/UserOrder';

export const getUserOrders: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user;
    const result = await getAllUserOrders(user.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const createOrder: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user = req.user;

    const result = await createUserOrder(user);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
