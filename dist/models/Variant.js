"use strict";
var Variant_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let Variant = exports.Variant = Variant_1 = class Variant extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    tslib_1.__metadata("design:type", String)
], Variant.prototype, "name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    tslib_1.__metadata("design:type", String)
], Variant.prototype, "value", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Variant_1, 'product_variant_id'),
    tslib_1.__metadata("design:type", Variant)
], Variant.prototype, "product", void 0);
exports.Variant = Variant = Variant_1 = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'variants',
    })
], Variant);
//# sourceMappingURL=Variant.js.map