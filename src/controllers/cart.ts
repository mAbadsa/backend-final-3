import { Request, Response, NextFunction } from 'express';
import { getCartById, createNewCart } from '@services/cart';
import { updateUserCurrentCart } from '@/services/users';
import { constants } from '@/utils';

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { httpStatus } = constants;

  try {
    const user = req.user;
    let userCartId = user.currentCartId;

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
    res.status(httpStatus.OK).json({ success: true, message: 'OK', cart });
  } catch (error) {
    next(error);
  }
};
