import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'brands',
})
export class Brand extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  })
  img!: string;

  @HasMany(() => Product, 'brand_id')
  products!: Product[];
}
