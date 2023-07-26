import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
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
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [9, 12],
    },
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
    validate: {
      len: [2, 100],
    },
  })
  state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pin_code!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_default!: boolean;
}
