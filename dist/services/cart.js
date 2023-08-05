"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemFromCart = exports.createNewCart = exports.getCartById = void 0;
const CartItem_1 = require("@models/CartItem");
const Product_1 = require("@models/Product");
const Cart_1 = require("@models/Cart");
const getCartById = async (cartId) => {
    return await Cart_1.Cart.findByPk(cartId, {
        include: [{ model: CartItem_1.CartItem, separate: true, include: [Product_1.Product] }],
    });
};
exports.getCartById = getCartById;
//todo: subTotal = 0, deliveryFee=12, isOrdered=false, discount= 0. by default
const createNewCart = async ({ userId, subTotal = 0, deliveryFee = 12, isOrdered = false, discount = 0, }) => {
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