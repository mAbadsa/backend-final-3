import { Model } from 'sequelize-typescript';
import { CartItem } from './CartItem';
import { User } from './User';
import { UserOrder } from './UserOrder';
export declare class Cart extends Model {
    userId: number;
    subTotal: number;
    discount: number;
    deliveryFee: number;
    isOrdered: boolean;
    user: User;
    items: CartItem[];
    userOrder: UserOrder[];
}
