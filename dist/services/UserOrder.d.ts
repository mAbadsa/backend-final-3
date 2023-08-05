import { User } from '@/models/User';
import { UserOrder } from '@/models/UserOrder';
export declare const getAllUserOrders: (user_id: number) => Promise<UserOrder[]>;
export declare const createUserOrder: (user: User) => Promise<UserOrder>;
