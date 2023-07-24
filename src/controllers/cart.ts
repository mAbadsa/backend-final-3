import { Request, Response, NextFunction } from 'express';
import { getCardById, createNewCart } from '@services/cart';

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log({ body: req.params });
  try {
    const user = req.user;
    const userCartId = user.currentCartId;

    const cart = await getCardById(userCartId);

    res.status(200).json({ success: true, message: 'OK', cart });
  } catch (error) {
    console.log({ error });
    next(error);
  }
};
export const addCart = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const body = req.body;
  console.log({ body });
  try {
    const cart = await createNewCart({ ...body });
    res
      .status(201)
      .json({ success: true, message: 'Cart create successfully', cart });
  } catch (error) {
    next(error);
  }
};
