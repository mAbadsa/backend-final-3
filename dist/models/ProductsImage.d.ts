import { Model } from 'sequelize-typescript';
import { Product } from './Product';
export declare class ProductImage extends Model {
    src: string;
    alt: string;
    product: Product[];
}
