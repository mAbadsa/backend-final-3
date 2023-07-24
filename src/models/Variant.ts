import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'variants',
})
export class Variant extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  value!: string;

  @BelongsTo(() => Variant, 'product_variant_id')
  product!: Variant;
}
