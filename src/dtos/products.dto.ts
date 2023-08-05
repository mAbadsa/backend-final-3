import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class ProductsByBrandQueryDto {
  @IsString()
  @IsNotEmpty()
  brand: string;
}

export class ProductsByIdQueryDto {
  @IsNumberString()
  id: string;
}
