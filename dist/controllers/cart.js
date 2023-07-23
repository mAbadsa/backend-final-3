"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCart = exports.getCart = void 0;
const cart_1 = require("../services/cart");
const getCart = async (req, res, next) => {
    console.log({ body: req.params });
    try {
        const user = req.user;
        const userCartId = user.currentCartId;
        const cart = await (0, cart_1.getCardById)(userCartId);
        res.status(200).json({ success: true, message: 'OK', cart });
    }
    catch (error) {
        console.log({ error });
        next(error);
    }
};
exports.getCart = getCart;
const addCart = async (req, res, next) => {
    const body = req.body;
    console.log({ body });
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