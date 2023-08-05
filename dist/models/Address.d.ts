import { Model } from 'sequelize-typescript';
export declare class Address extends Model {
    first_name: string;
    last_name: string;
    mobile_number: string;
    street: string;
    state: string;
    city: string;
    pin_code: string;
    is_default: boolean;
}
