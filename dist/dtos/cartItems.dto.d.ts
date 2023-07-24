export declare class CreateCartItemBodyDto {
    productId: number;
    quantity: number;
}
export declare class UpdateCartItemBodyDto {
    state: 'increment' | 'decrement';
}
export declare class GetCartItemParamDto {
    cartItemId: string;
}
