"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCart = exports.getCart = void 0;
const cart_1 = require("@services/cart");
const users_1 = require("@/services/users");
const getCart = async (req, res, next) => {
    try {
        const user = req.user;
        let userCartId = user.currentCartId;
        if (userCartId == null) {
            userCartId = (await (0, cart_1.createNewCart)({
                userId: user.id,
                discount: 0,
                subTotal: 0,
                deliveryFee: 12,
                isOrdered: false,
            })).id;
        }
        (0, users_1.updateUserCurrentCart)(user.id, userCartId);
        const cart = await (0, cart_1.getCartById)(userCartId);
        user.currentCartId = userCartId;
        res.status(200).json({ success: true, message: 'OK', cart });
    }
    catch (error) {
        next(error);
    }
};
exports.getCart = getCart;
const addCart = async (req, res, next) => {
    const body = req.body;
    try {
        const cart = await (0, cart_1.createNewCart)(Object.assign({}, body));
        res
            .status(201)
            .json({ success: true, message: 'Cart create successfully', cart });
    }
    catch (error) {
        next(error);
    }
};
exports.addCart = addCart;
//# sourceMappingURL=cart.js.map