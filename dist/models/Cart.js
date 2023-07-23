"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const CartItem_1 = require("./CartItem");
const User_1 = require("./User");
const UserOrder_1 = require("./UserOrder");
let Cart = exports.Cart = class Cart extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({
        field: 'user_id',
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'sub_total',
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        validate: {
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "subTotal", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: true,
        defaultValue: 0,
        validate: {
            max: 100,
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'delivery_fee',
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: true,
        defaultValue: 12.5,
        validate: {
            max: 200,
            min: 0,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "deliveryFee", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'is_ordered',
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cart.prototype, "isOrdered", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Cart.prototype, "user", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => CartItem_1.CartItem, 'cart_id'),
    tslib_1.__metadata("design:type", Array)
], Cart.prototype, "items", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasOne)(() => UserOrder_1.UserOrder, 'cart_id'),
    tslib_1.__metadata("design:type", Array)
], Cart.prototype, "userOrder", void 0);
exports.Cart = Cart = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'carts',
    })
], Cart);
//# sourceMappingURL=Cart.js.map