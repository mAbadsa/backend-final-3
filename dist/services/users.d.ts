import { User } from '@models/User';
interface IUser {
    firstName: number;
    lastName: number;
    email: number;
    password: number;
}
export declare const getUserById: (userId: number) => Promise<User>;
export declare const getUserByEmail: (email: string) => Promise<User>;
export declare const createNewUser: ({ firstName, lastName, email, password, }: IUser) => Promise<User>;
export declare const updateUserCurrentCart: (userId: number, cartId: number) => Promise<number[]>;
export declare const removeUserById: (userId: number) => Promise<number>;
export {};
