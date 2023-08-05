"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const _config_1 = tslib_1.__importDefault(require("@config"));
const Address_1 = require("@models/Address");
const Brand_1 = require("@models/Brand");
const Cart_1 = require("@models/Cart");
const CartItem_1 = require("@models/CartItem");
const Category_1 = require("@models/Category");
const Favorite_1 = require("@models/Favorite");
const Product_1 = require("@models/Product");
const ProductsImage_1 = require("@models/ProductsImage");
const ProductVariant_1 = require("@models/ProductVariant");
const User_1 = require("@models/User");
const UserOrder_1 = require("@models/UserOrder");
const Variant_1 = require("@models/Variant");
const { database } = _config_1.default;
const connection = new sequelize_typescript_1.Sequelize({
    dialect: database.dialect,
    host: database.host,
    username: database.username,
    password: database.password,
    database: database.database,
    logging: database.logging,
    models: [
        Address_1.Address,
        Brand_1.Brand,
        Cart_1.Cart,
        CartItem_1.CartItem,
        Category_1.Category,
        Favorite_1.Favorite,
        Product_1.Product,
        ProductsImage_1.ProductImage,
        ProductVariant_1.ProductVariant,
        User_1.User,
        UserOrder_1.UserOrder,
        Variant_1.Variant,
    ],
});
exports.default = connection;
//# sourceMappingURL=connection.js.map