"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("./Product");
let Brand = exports.Brand = class Brand extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", String)
], Brand.prototype, "name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    tslib_1.__metadata("design:type", String)
], Brand.prototype, "description", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Brand.prototype, "img", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Product_1.Product, 'brand_id'),
    tslib_1.__metadata("design:type", Array)
], Brand.prototype, "products", void 0);
exports.Brand = Brand = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'brands',
    })
], Brand);
//# sourceMappingURL=Brand.js.map