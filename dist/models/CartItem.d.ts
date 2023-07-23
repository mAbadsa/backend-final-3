import { Model } from 'sequelize-typescript';
import { Cart } from './Cart';
import { Product } from './Product';
export declare class CartItem extends Model {
    cartId: number;
    productId: number;
    quantity: number;
    cart: Cart;
    product: Product;
}
