import { createProductFilter, getProductsByFilter } from '@/services/product';
import { getAllBrands } from '@/services/brand';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { createUserOrder, getAllUserOrders } from '@/services/UserOrder';
import { constants } from '@/utils';
const { httpStatus } = constants;
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
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;

    const result = await createUserOrder(user);
    if (!result) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "can't order an empty cart!" });
    }
    return res.status(httpStatus.OK).json(result);
  } catch (error) {
    next(error);
  }
};
