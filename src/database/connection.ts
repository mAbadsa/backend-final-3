import { Sequelize } from 'sequelize-typescript';
import config from '@config';
import { Address } from '@models/Address';
import { Brand } from '@models/Brand';
import { Cart } from '@models/Cart';
import { CartItem } from '@models/CartItem';
import { Category } from '@models/Category';
import { Favorite } from '@models/Favorite';
import { Product } from '@models/Product';
import { ProductImage } from '@models/ProductsImage';
import { ProductVariant } from '@models/ProductVariant';
import { User } from '@models/User';
import { UserOrder } from '@models/UserOrder';
import { Variant } from '@models/Variant';

const { database } = config;

const connection = new Sequelize({
  dialect: database.dialect,
  host: database.host,
  username: database.username,
  password: database.password,
  database: database.database,
  logging: database.logging,
  models: [
    Address,
    Brand,
    Cart,
    CartItem,
    Category,
    Favorite,
    Product,
    ProductImage,
    ProductVariant,
    User,
    UserOrder,
    Variant,
  ],
});

export default connection;
