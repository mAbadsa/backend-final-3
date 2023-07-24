"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const hashPassword_1 = require("../utils/hashPassword");
const Address_1 = require("./Address");
const Cart_1 = require("./Cart");
const UserOrder_1 = require("./UserOrder");
let User = exports.User = class User extends sequelize_typescript_1.Model {
    static async hashPassword(user) {
        if (user.changed('password')) {
            const hashedPassword = await (0, hashPassword_1.hashPassword)(user.password);
            user.password = hashedPassword;
        }
    }
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'first_name',
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'last_name',
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            min: 8,
            isAlphanumeric: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Must be a valid email address',
            },
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'current_cart_id',
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "currentCartId", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        defaultValue: sequelize_typescript_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Cart_1.Cart, 'user_id'),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "cart", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => UserOrder_1.UserOrder, 'user_id'),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "user_orders", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Address_1.Address, 'user_id'),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "addresses", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User]),
    tslib_1.__metadata("design:returntype", Promise)
], User, "hashPassword", null);
exports.User = User = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'users',
    })
], User);
//# sourceMappingURL=User.js.map