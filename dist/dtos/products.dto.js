"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsByIdQueryDto = exports.ProductsByBrandQueryDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ProductsByBrandQueryDto {
}
exports.ProductsByBrandQueryDto = ProductsByBrandQueryDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ProductsByBrandQueryDto.prototype, "brand", void 0);
class ProductsByIdQueryDto {
}
exports.ProductsByIdQueryDto = ProductsByIdQueryDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumberString)(),
    tslib_1.__metadata("design:type", String)
], ProductsByIdQueryDto.prototype, "id", void 0);
//# sourceMappingURL=products.dto.js.map