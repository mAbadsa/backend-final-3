import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class UserOrder extends Model {
    email: string;
    status: string;
    user: User;
    cart: User;
}
