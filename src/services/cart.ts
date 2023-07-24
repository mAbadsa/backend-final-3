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

export const getCardById = async (cartId: number): Promise<Cart> => {
  console.log({ cartId });
  return await Cart.findByPk(cartId, {
    include: [{ model: CartItem, separate: true, include: [Product] }],
  });
};

export const createNewCart = async ({
  userId,
  subTotal,
  deliveryFee,
  isOrdered,
  discount,
}: IAddToCart): Promise<Cart> => {
  console.log({
    userId,
    subTotal,
    deliveryFee,
    isOrdered,
    discount,
  });

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
