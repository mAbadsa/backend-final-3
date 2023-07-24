import { Model } from 'sequelize-typescript';
export declare class Variant extends Model {
    name: string;
    value: string;
    product: Variant;
}
