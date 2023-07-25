import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  CreatedAt,
  UpdatedAt,
  Sequelize,
} from 'sequelize-typescript';
import { Brand } from './Brand';
import { CartItem } from './CartItem';
import { Category } from './Category';
import { Favorite } from './Favorite';
import { ProductImage } from './ProductsImage';
import { ProductVariant } from './ProductVariant';

@Table({
  timestamps: true,
  tableName: 'products',
})
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 150],
    },
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 250],
    },
  })
  sub_title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      len: [20, 500],
    },
  })
  description!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
    },
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  })
  quantity!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  })
  rating!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  })
  rating_count!: number;

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

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    validate: {
      max: 100,
      min: 0,
    },
  })
  discount!: number;

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  @BelongsTo(() => Brand, 'brand_id')
  brand!: Brand;

  @HasMany(() => ProductImage, 'product_id')
  productImage!: ProductImage[];

  @HasMany(() => Favorite, 'product_id')
  favorites!: Favorite[];

  @HasMany(() => CartItem, 'product_id')
  cartItem!: CartItem[];

  @HasMany(() => ProductVariant, 'product_id')
  productVariants!: ProductVariant[];
}
