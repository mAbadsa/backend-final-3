import { ParsedQs } from 'qs';
import { Product } from '../models/Product';
export declare function getProductsByFilter(filter: any): Promise<Product[]>;
export declare function createProductFilter(query: ParsedQs): Record<string, object>;
export declare function getNewArrivalsEarliestDate(): Date;
