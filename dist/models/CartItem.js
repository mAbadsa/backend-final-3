"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Cart_1 = require("./Cart");
const Product_1 = require("./Product");
let CartItem = exports.CartItem = class CartItem extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Cart_1.Cart),
    (0, sequelize_typescript_1.Column)({
        field: 'cart_id',
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "cartId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Product_1.Product),
    (0, sequelize_typescript_1.Column)({
        field: 'product_id',
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            max: 100,
            min: 1,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Cart_1.Cart, 'cart_id'),
    tslib_1.__metadata("design:type", Cart_1.Cart)
], CartItem.prototype, "cart", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_1.Product, { onDelete: 'CASCADE', foreignKey: 'product_id' }),
    tslib_1.__metadata("design:type", Product_1.Product)
], CartItem.prototype, "product", void 0);
exports.CartItem = CartItem = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'cart_items',
    })
], CartItem);
//# sourceMappingURL=CartItem.js.map