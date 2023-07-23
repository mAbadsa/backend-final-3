"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemFromCart = exports.createNewCart = exports.getCardById = void 0;
const CartItem_1 = require("../models/CartItem");
const Product_1 = require("../models/Product");
const Cart_1 = require("../models/Cart");
const getCardById = async (cartId) => {
    console.log({ cartId });
    return await Cart_1.Cart.findByPk(cartId, {
        include: [{ model: CartItem_1.CartItem, separate: true, include: [Product_1.Product] }],
    });
};
exports.getCardById = getCardById;
const createNewCart = async ({ userId, subTotal, deliveryFee, isOrdered, discount, }) => {
    console.log({
        userId,
        subTotal,
        deliveryFee,
        isOrdered,
        discount,
    });
    const cart = await Cart_1.Cart.create({
        userId,
        subTotal,
        deliveryFee,
        isOrdered,
        discount,
    });
    const newCart = await cart.save();
    return newCart;
};
exports.createNewCart = createNewCart;
const removeItemFromCart = async (cartId) => {
    return await Cart_1.Cart.destroy({ where: { id: cartId } });
};
exports.removeItemFromCart = removeItemFromCart;
//# sourceMappingURL=cart.js.map