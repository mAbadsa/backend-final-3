import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table({
  timestamps: false,
  tableName: 'addresses',
})
export class Address extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mobile_number!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  street!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pin_code!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  is_default!: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @BelongsTo(() => User, 'user_id')
  user!: User;
}
