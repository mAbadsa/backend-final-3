"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrder = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Cart_1 = require("./Cart");
const User_1 = require("./User");
let UserOrder = exports.UserOrder = class UserOrder extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Must be a valid email address',
            },
        },
    }),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "email", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: 'ordered',
    }),
    tslib_1.__metadata("design:type", String)
], UserOrder.prototype, "status", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, 'user_id'),
    tslib_1.__metadata("design:type", User_1.User)
], UserOrder.prototype, "user", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Cart_1.Cart, 'cart_id'),
    tslib_1.__metadata("design:type", User_1.User)
], UserOrder.prototype, "cart", void 0);
exports.UserOrder = UserOrder = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'user_orders',
    })
], UserOrder);
//# sourceMappingURL=UserOrder.js.map