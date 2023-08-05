"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("@middlewares/index");
const cartItem_1 = require("@controllers/cartItem");
const cartItems_dto_1 = require("@dtos/cartItems.dto");
const router = (0, express_1.Router)();
router
    .route('/:cartItemId')
    .get((0, index_1.validationMiddleware)(cartItems_dto_1.GetCartItemParamDto, 'params'), index_1.checkAuth, cartItem_1.getCartItem)
    .patch((0, index_1.validationMiddleware)(cartItems_dto_1.UpdateCartItemBodyDto, 'body'), (0, index_1.validationMiddleware)(cartItems_dto_1.GetCartItemParamDto, 'params'), index_1.checkAuth, cartItem_1.updateQuantity)
    .delete((0, index_1.validationMiddleware)(cartItems_dto_1.GetCartItemParamDto, 'params'), index_1.checkAuth, cartItem_1.deleteCartItem);
router
    .route('/')
    .get(index_1.checkAuth, cartItem_1.getAllCartItem)
    .post((0, index_1.validationMiddleware)(cartItems_dto_1.CreateCartItemBodyDto, 'body'), index_1.checkAuth, cartItem_1.createNewCartItem);
exports.default = router;
//# sourceMappingURL=cartItems.js.map