"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Brand_1 = require("./Brand");
const CartItem_1 = require("./CartItem");
const Category_1 = require("./Category");
const Favorite_1 = require("./Favorite");
const ProductsImage_1 = require("./ProductsImage");
const ProductVariant_1 = require("./ProductVariant");
let Product = exports.Product = class Product extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, 150],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "title", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [3, 250],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "sub_title", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
        validate: {
            len: [20, 500],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        validate: {
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: true,
        validate: {
            min: 0,
            max: 5,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "rating", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    }),
    tslib_1.__metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    }),
    tslib_1.__metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        validate: {
            max: 100,
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Category_1.Category, 'category_id'),
    tslib_1.__metadata("design:type", Category_1.Category)
], Product.prototype, "category", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Brand_1.Brand, 'brand_id'),
    tslib_1.__metadata("design:type", Brand_1.Brand)
], Product.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ProductsImage_1.ProductImage, 'product_id'),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "productImage", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Favorite_1.Favorite, 'product_id'),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "favorites", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CartItem_1.CartItem, 'product_id'),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "cartItem", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => ProductVariant_1.ProductVariant, 'product_id'),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "productVariants", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'products',
    })
], Product);
//# sourceMappingURL=Product.js.map