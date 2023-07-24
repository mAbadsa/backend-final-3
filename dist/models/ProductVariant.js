"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariant = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("./Product");
const Variant_1 = require("./Variant");
let ProductVariant = exports.ProductVariant = class ProductVariant extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_1.Product, 'product_id'),
    tslib_1.__metadata("design:type", Product_1.Product)
], ProductVariant.prototype, "cart", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductVariant.prototype, "available_variant_options", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Variant_1.Variant, 'product_variant_id'),
    tslib_1.__metadata("design:type", Array)
], ProductVariant.prototype, "variants", void 0);
exports.ProductVariant = ProductVariant = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'product_variants',
    })
], ProductVariant);
//# sourceMappingURL=ProductVariant.js.map