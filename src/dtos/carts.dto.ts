import {
  IsNumber,
  IsNotEmpty,
  Min,
  IsBoolean,
  IsInt,
  IsNumberString,
} from 'class-validator';

export class CartBodyDto {
  @IsInt()
  userId: number;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @IsNotEmpty()
  discount: number;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @Min(0)
  @IsNotEmpty()
  subTotal: number;

  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @Min(0)
  @IsNotEmpty()
  deliveryFee: number;

  @IsBoolean()
  isOrdered: number;
}

export class GetCartQueryDto {
  @IsNumberString()
  cartId: string;
}
