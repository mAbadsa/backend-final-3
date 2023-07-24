import { IsString, IsNotEmpty } from 'class-validator';

export class ProductsByBrandQueryDto {
  @IsString()
  @IsNotEmpty()
  brand: string;
}
