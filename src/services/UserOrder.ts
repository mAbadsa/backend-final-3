import { User } from '@/models/User';
import { UserOrder } from '@/models/UserOrder';

export const getAllUserOrders = async (
  user_id: number
): Promise<UserOrder[]> => {
  return await UserOrder.findAll({ where: { user_id: user_id } });
};

export const createUserOrder = async (user: User): Promise<UserOrder> => {
  console.log(user.currentCartId);
  return await UserOrder.create({
    email: user.email,
    status: 'ordered',
    cart_id: user.currentCartId,
    user_id: user.id,
  });
  //todo: set the cart as ordered and create new one for the user
};
