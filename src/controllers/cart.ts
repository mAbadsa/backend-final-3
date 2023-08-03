import { Request, Response, NextFunction } from 'express';
import { getCartById, createNewCart } from '@services/cart';
import { updateUserCurrentCart } from '@/services/users';

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = req.user;
    let userCartId = user.currentCartId;
    console.log(userCartId);
    if (userCartId == null) {
      userCartId = (
        await createNewCart({
          userId: user.id,
          discount: 0,
          subTotal: 0,
          deliveryFee: 12,
          isOrdered: false,
        })
      ).id;
    }
    updateUserCurrentCart(user.id, userCartId);
    const cart = await getCartById(userCartId);
    user.currentCartId = userCartId;
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
  try {
    const cart = await createNewCart({ ...body });
    res
      .status(201)
      .json({ success: true, message: 'Cart create successfully', cart });
  } catch (error) {
    next(error);
  }
};
