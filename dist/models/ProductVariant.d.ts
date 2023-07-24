import { Model } from 'sequelize-typescript';
import { Product } from './Product';
import { Variant } from './Variant';
export declare class ProductVariant extends Model {
    cart: Product;
    available_variant_options: number;
    variants: Variant[];
}
