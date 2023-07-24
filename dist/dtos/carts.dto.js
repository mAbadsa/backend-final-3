"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartQueryDto = exports.CartBodyDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CartBodyDto {
}
exports.CartBodyDto = CartBodyDto;
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    tslib_1.__metadata("design:type", Number)
], CartBodyDto.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CartBodyDto.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CartBodyDto.prototype, "subTotal", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CartBodyDto.prototype, "deliveryFee", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Number)
], CartBodyDto.prototype, "isOrdered", void 0);
class GetCartQueryDto {
}
exports.GetCartQueryDto = GetCartQueryDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumberString)(),
    tslib_1.__metadata("design:type", String)
], GetCartQueryDto.prototype, "cartId", void 0);
//# sourceMappingURL=carts.dto.js.map