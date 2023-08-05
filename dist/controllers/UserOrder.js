"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.getUserOrders = void 0;
const UserOrder_1 = require("@/services/UserOrder");
const getUserOrders = async (req, res) => {
    try {
        const user = req.user;
        const result = await (0, UserOrder_1.getAllUserOrders)(user.id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getUserOrders = getUserOrders;
const createOrder = async (req, res) => {
    try {
        const user = req.user;
        const result = await (0, UserOrder_1.createUserOrder)(user);
        if (!result) {
            return res.status(400).json({ message: "can't order an empty cart!" });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.createOrder = createOrder;
//# sourceMappingURL=UserOrder.js.map