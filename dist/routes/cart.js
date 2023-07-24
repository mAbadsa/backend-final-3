"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../middlewares/index");
const cart_1 = require("../controllers/cart");
const carts_dto_1 = require("../dtos/carts.dto");
const router = (0, express_1.Router)();
router
    .route('/')
    .get(index_1.checkAuth, cart_1.getCart)
    .post((0, index_1.validationMiddleware)(carts_dto_1.CartBodyDto, 'body'), index_1.checkAuth, cart_1.addCart);
exports.default = router;
//# sourceMappingURL=cart.js.map