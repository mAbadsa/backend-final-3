import { Model } from 'sequelize-typescript';
import { Product } from './Product';
export declare class Category extends Model {
    name: string;
    description: string;
    img: string;
    products: Product[];
}
