"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImage = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("./Product");
let ProductImage = exports.ProductImage = class ProductImage extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ProductImage.prototype, "src", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    tslib_1.__metadata("design:type", String)
], ProductImage.prototype, "alt", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_1.Product, {
        onDelete: 'NULL',
        onUpdate: 'CASCADE',
        foreignKey: 'product_id',
    }),
    tslib_1.__metadata("design:type", Array)
], ProductImage.prototype, "product", void 0);
exports.ProductImage = ProductImage = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'product_images',
    })
], ProductImage);
//# sourceMappingURL=ProductsImage.js.map