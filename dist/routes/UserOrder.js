"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserOrder_1 = require("@/controllers/UserOrder");
const middlewares_1 = require("@/middlewares");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/').post(middlewares_1.checkAuth, UserOrder_1.createOrder);
router.route('/').get(middlewares_1.checkAuth, UserOrder_1.getUserOrders);
exports.default = router;
//# sourceMappingURL=UserOrder.js.map