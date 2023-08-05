import { CartItem } from '@models/CartItem';
interface IAddToCartItem {
    cartId: number;
    productId: number;
    quantity: number;
}
export declare const getCardItemById: (cartItemId: number) => Promise<CartItem>;
export declare const getCartItemByCartId: (cartId: number, productId: number) => Promise<CartItem>;
export declare const getAllCardItemsByCartId: (cartId: number) => Promise<CartItem[]>;
export declare const calculateTotalPrice: (cartId: number) => Promise<number>;
export declare const createCartItem: ({ cartId, productId, quantity, }: IAddToCartItem) => Promise<CartItem>;
export declare const removeItemFromCartItem: (cartItemId: number) => Promise<number>;
export declare const updateCartItemQuantity: (cartItemId: number, quantity: number, state: 'increment' | 'decrement') => Promise<number[]>;
export declare const createOrUpdateCartItem: (cartId: number, productId: number, quantity: number, state?: 'increment' | 'decrement') => Promise<void>;
export {};
