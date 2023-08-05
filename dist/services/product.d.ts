import { ParsedQs } from 'qs';
import { Product } from '@models/Product';
import { ProductImage } from '@/models/ProductsImage';
export declare function getProductsByFilter(filter: any): Promise<{
    products: Product[];
    pagesNumber: number;
}>;
export declare function getOneProduct(id: number): Promise<Product>;
export declare function createProductFilter(query: ParsedQs): {
    where: {};
    limit: number;
    offset: number;
    include: typeof ProductImage;
};
export declare function getNewArrivalsEarliestDate(): Date;
