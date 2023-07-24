import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Cart } from './Cart';
import { Product } from './Product';

@Table({
  timestamps: false,
  tableName: 'cart_items',
})
export class CartItem extends Model {
  @ForeignKey(() => Cart)
  @Column({
    field: 'cart_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  cartId!: number;

  @ForeignKey(() => Product)
  @Column({
    field: 'product_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      max: 100,
      min: 1,
    },
  })
  quantity!: number;

  @BelongsTo(() => Cart, 'cart_id')
  cart!: Cart;

  @BelongsTo(() => Product, { onDelete: 'CASCADE', foreignKey: 'product_id' })
  product!: Product;
}
