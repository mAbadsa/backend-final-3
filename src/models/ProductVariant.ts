import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Product } from './Product';
import { Variant } from './Variant';

@Table({
  timestamps: false,
  tableName: 'product_variants',
})
export class ProductVariant extends Model {
  @BelongsTo(() => Product, 'product_id')
  cart!: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  available_variant_options!: number;

  @HasMany(() => Variant, 'product_variant_id')
  variants!: Variant[];
}
