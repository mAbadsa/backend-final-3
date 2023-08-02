import { CartItem } from '@models/CartItem';
import { Product } from '@models/Product';
import { Cart } from '@models/Cart';

interface IAddToCart {
  discount: number;
  userId: number;
  subTotal: number;
  deliveryFee: number;
  isOrdered: boolean;
}

export const getCartById = async (cartId: number): Promise<Cart> => {
  return await Cart.findByPk(cartId, {
    include: [{ model: CartItem, separate: true, include: [Product] }],
  });
};
//todo: subTotal = 0, deliveryFee=12, isOrdered=false, discount= 0. by default
export const createNewCart = async ({
  userId,
  subTotal = 0,
  deliveryFee = 12,
  isOrdered = false,
  discount = 0,
}: IAddToCart): Promise<Cart> => {
  const cart = await Cart.create({
    userId,
    subTotal,
    deliveryFee,
    isOrdered,
    discount,
  });
  const newCart = await cart.save();
  return newCart;
};

export const removeItemFromCart = async (cartId: number): Promise<number> => {
  return await Cart.destroy({ where: { id: cartId } });
};
