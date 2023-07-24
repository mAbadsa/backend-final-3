import {
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateCartItemBodyDto {
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;
}

export class UpdateCartItemBodyDto {
  @IsString()
  @IsNotEmpty()
  state: 'increment' | 'decrement';
}

export class GetCartItemParamDto {
  @IsNumberString()
  cartItemId: string;
}
