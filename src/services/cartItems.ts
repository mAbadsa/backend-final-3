import { HttpException, messages } from '@/utils';
import { httpStatus } from '@/utils/constants';
import { CartItem } from '@models/CartItem';
import { Product } from '@models/Product';
import { getCartById } from '@services/cart';

interface IAddToCartItem {
  cartId: number;
  productId: number;
  quantity: number;
}

// get a specific cartItem by Id
export const getCardItemById = async (
  cartItemId: number
): Promise<CartItem> => {
  return await CartItem.findByPk(cartItemId, { include: { model: Product } });
};

// get a specific cartItem by cartId and Product
//todo: they will need to update the cart item (Quantity)
export const getCartItemByCartId = async (
  cartId: number,
  productId: number
): Promise<CartItem> => {
  return await CartItem.findOne({ where: { cartId, productId } });
};
//todo: this should return cart, include cart items
//no need to ask for all items, they will ask for the cart including cart items
// get all cart items
export const getAllCardItemsByCartId = async (
  cartId: number
): Promise<CartItem[]> => {
  return await CartItem.findAll({
    where: { cartId },
    include: { model: Product },
  });
};

// Calculate totla cart price
export const calculateTotalPrice = async (cartId: number): Promise<number> => {
  const cartItems = await getAllCardItemsByCartId(cartId);
  const cart = await getCartById(cartId);

  if (!cart) {
    throw new HttpException(
      httpStatus.NOT_FOUND,
      messages.cartResponse.CART_NOT_FOUND
    );
  }
  const discount = cart.discount;
  const deliveryFee = cart.deliveryFee;
  let totalPrice = 0;
  for (const cartItem of cartItems) {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;
    totalPrice += productPrice * quantity;
  }

  totalPrice = totalPrice * (1 - discount / 100) + deliveryFee;

  return totalPrice;
};

// Add a new cartItems
export const createCartItem = async ({
  cartId,
  productId,
  quantity,
}: IAddToCartItem): Promise<CartItem> => {
  const cartItem = await CartItem.create({
    cartId,
    productId,
    quantity,
  });

  console.log({ cartItem });

  const newCartItem = await cartItem.save();

  return newCartItem;
};

// Remove cart item by id
export const removeItemFromCartItem = async (
  cartItemId: number
): Promise<number> => {
  return await CartItem.destroy({ where: { id: cartItemId } });
};

// Update the cartItem qunatity
export const updateCartItemQuantity = async (
  cartItemId: number,
  quantity: number,
  state: 'increment' | 'decrement'
): Promise<number[]> => {
  console.log({ cartItemId, quantity, state });

  if (state === 'increment') {
    quantity = quantity + 1;
  } else if (state === 'decrement') {
    quantity = quantity - 1;
  }

  return await CartItem.update(
    { quantity: quantity },
    { where: { id: cartItemId } }
  );
};

// Function to create or update a cart item and update the total price
export const createOrUpdateCartItem = async (
  cartId: number,
  productId: number,
  quantity: number,
  state?: 'increment' | 'decrement'
): Promise<void> => {
  console.log({ quantity, productId, cartId });
  console.log('---------------------------');

  // Create or find the cart item
  const cartItem = await getCartItemByCartId(cartId, productId);
  console.log(cartItem);
  if (!cartItem) {
    await createCartItem({ cartId, productId, quantity });
  } else {
    cartItem.quantity = quantity;
    await updateCartItemQuantity(cartItem.id, quantity, state);
  }

  // Calculate the total price and update the cart
  const totalPrice = await calculateTotalPrice(cartId);
  const cart = await getCartById(cartId);
  if (cart) {
    cart.subTotal = totalPrice;
    await cart.save();
  } else {
    throw new HttpException(
      httpStatus.NOT_FOUND,
      messages.cartResponse.CART_NOT_FOUND
    );
  }
};
