import { Cart } from '@/models/Cart';
import { User } from '@/models/User';
import { UserOrder } from '@/models/UserOrder';
import { createNewCart, getCartById } from './cart';
import { updateUserCurrentCart } from './users';

export const getAllUserOrders = async (
  user_id: number
): Promise<UserOrder[]> => {
  return await UserOrder.findAll({ where: { user_id: user_id } });
};

export const createUserOrder = async (user: User): Promise<UserOrder> => {
  const currentCart: Cart = await getCartById(user.currentCartId);
  const userId: number = user.id;
  if (currentCart.subTotal === 0 || currentCart.isOrdered == true) {
    return null;
  }
  const userOrder: UserOrder = await UserOrder.create({
    email: user.email,
    status: 'ordered',
    cart_id: user.currentCartId,
    user_id: userId,
  });
  await Cart.update({ isOrdered: true }, { where: { id: user.currentCartId } });
  console.log(user.currentCartId);
  //todo: create new one for the user
  console.log(user.id);
  const newCart: Cart = await createNewCart({
    userId: user.id,
    discount: 0,
    subTotal: 0,
    deliveryFee: 12,
    isOrdered: false,
  });
  console.log(newCart.dataValues.id);
  await updateUserCurrentCart(userId, newCart.dataValues.id);

  return userOrder;
};
