import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BeforeCreate,
  BeforeUpdate,
  CreatedAt,
  Sequelize,
  UpdatedAt,
} from 'sequelize-typescript';
import { hashPassword } from '@utils/hashPassword';
import { Address } from './Address';
import { Cart } from './Cart';
import { UserOrder } from './UserOrder';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model {
  @Column({
    field: 'first_name',
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  })
  firstName!: string;

  @Column({
    field: 'last_name',
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      min: 8,
      isAlphanumeric: true,
    },
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address',
      },
    },
  })
  email!: string;

  @Column({
    field: 'current_cart_id',
    type: DataType.INTEGER,
    allowNull: true,
  })
  currentCartId!: number;

  @CreatedAt
  @Column({
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  updatedAt?: Date;

  @HasMany(() => Cart, 'user_id')
  cart!: Cart[];

  @HasMany(() => UserOrder, 'user_id')
  user_orders!: UserOrder[];

  @HasMany(() => Address, 'user_id')
  addresses!: Address[];

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: User): Promise<void> {
    if (user.changed('password')) {
      const hashedPassword = await hashPassword(user.password);
      user.password = hashedPassword;
    }
  }
}
