import { Model } from 'sequelize-typescript';
import { Product } from './Product';
export declare class Brand extends Model {
    name: string;
    description: string;
    img: string;
    products: Product[];
}
