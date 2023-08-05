"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("@middlewares/index");
const cart_1 = require("@controllers/cart");
const router = (0, express_1.Router)();
router.route('/').get(index_1.checkAuth, cart_1.getCart);
//.post(validationMiddleware(CartBodyDto, 'body'), checkAuth, addCart);
exports.default = router;
//# sourceMappingURL=cart.js.map