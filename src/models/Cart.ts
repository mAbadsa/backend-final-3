import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import { CartItem } from './CartItem';
import { User } from './User';
import { UserOrder } from './UserOrder';

@Table({
  timestamps: false,
  tableName: 'carts',
})
export class Cart extends Model {
  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @Column({
    field: 'sub_total',
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
    },
  })
  subTotal!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    defaultValue: 0,
    validate: {
      max: 100,
      min: 0,
    },
  })
  discount!: number;

  @Column({
    field: 'delivery_fee',
    type: DataType.DOUBLE,
    allowNull: true,
    defaultValue: 12.5,
    validate: {
      max: 200,
      min: 0,
    },
  })
  deliveryFee!: number;

  @Column({
    field: 'is_ordered',
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isOrdered!: boolean;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => CartItem, 'cart_id')
  items!: CartItem[];

  @HasOne(() => UserOrder, 'cart_id')
  userOrder!: UserOrder[];
}
