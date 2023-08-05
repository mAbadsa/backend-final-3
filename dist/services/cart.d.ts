import { Cart } from '@models/Cart';
interface IAddToCart {
    discount: number;
    userId: number;
    subTotal: number;
    deliveryFee: number;
    isOrdered: boolean;
}
export declare const getCartById: (cartId: number) => Promise<Cart>;
export declare const createNewCart: ({ userId, subTotal, deliveryFee, isOrdered, discount, }: IAddToCart) => Promise<Cart>;
export declare const removeItemFromCart: (cartId: number) => Promise<number>;
export {};
