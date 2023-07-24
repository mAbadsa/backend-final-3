"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
let Address = exports.Address = class Address extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "full_name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [9, 12],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "mobile_number", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "street", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [2, 100],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "state", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            len: [2, 100],
        },
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "city", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", String)
], Address.prototype, "pin_code", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Address.prototype, "is_default", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, 'user_id'),
    tslib_1.__metadata("design:type", User_1.User)
], Address.prototype, "user", void 0);
exports.Address = Address = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'addresses',
    })
], Address);
//# sourceMappingURL=Address.js.map