"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartItemParamDto = exports.UpdateCartItemBodyDto = exports.CreateCartItemBodyDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateCartItemBodyDto {
}
exports.CreateCartItemBodyDto = CreateCartItemBodyDto;
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CreateCartItemBodyDto.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], CreateCartItemBodyDto.prototype, "quantity", void 0);
class UpdateCartItemBodyDto {
}
exports.UpdateCartItemBodyDto = UpdateCartItemBodyDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdateCartItemBodyDto.prototype, "state", void 0);
class GetCartItemParamDto {
}
exports.GetCartItemParamDto = GetCartItemParamDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNumberString)(),
    tslib_1.__metadata("design:type", String)
], GetCartItemParamDto.prototype, "cartItemId", void 0);
//# sourceMappingURL=cartItems.dto.js.map