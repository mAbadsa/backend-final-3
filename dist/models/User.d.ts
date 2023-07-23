import { Model } from 'sequelize-typescript';
import { Address } from './Address';
import { Cart } from './Cart';
import { UserOrder } from './UserOrder';
export declare class User extends Model {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    currentCartId: number;
    createdAt: Date;
    updatedAt?: Date;
    cart: Cart[];
    user_orders: UserOrder[];
    addresses: Address[];
    static hashPassword(user: User): Promise<void>;
}
