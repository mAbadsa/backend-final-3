import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'product_images',
})
export class ProductImage extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  })
  src!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alt!: string;

  @BelongsTo(() => Product, {
    onDelete: 'NULL',
    onUpdate: 'CASCADE',
    foreignKey: 'product_id',
  })
  product!: Product[];
}
