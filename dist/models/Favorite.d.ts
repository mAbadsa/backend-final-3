import { Model } from 'sequelize-typescript';
import { Product } from './Product';
import { User } from './User';
export declare class Favorite extends Model {
    user: User;
    products: Product[];
}
