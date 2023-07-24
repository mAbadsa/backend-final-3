import { Model } from 'sequelize-typescript';
import { User } from './User';
export declare class Address extends Model {
    full_name: string;
    mobile_number: string;
    street: string;
    state: string;
    city: string;
    pin_code: string;
    is_default: boolean;
    user: User;
}
