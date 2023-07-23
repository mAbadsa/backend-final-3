import { Model } from 'sequelize-typescript';
import { Brand } from './Brand';
import { CartItem } from './CartItem';
import { Category } from './Category';
import { Favorite } from './Favorite';
import { ProductImage } from './ProductsImage';
import { ProductVariant } from './ProductVariant';
export declare class Product extends Model {
    title: string;
    sub_title: string;
    description: string;
    price: number;
    quantity: number;
    rating: number;
    createdAt: Date;
    updatedAt?: Date;
    discount: number;
    category: Category;
    brand: Brand;
    productImage: ProductImage[];
    favorites: Favorite[];
    cartItem: CartItem[];
    productVariants: ProductVariant[];
}
