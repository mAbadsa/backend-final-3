"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrUpdateCartItem = exports.updateCartItemQuantity = exports.removeItemFromCartItem = exports.createCartItem = exports.calculateTotalPrice = exports.getAllCardItemsByCartId = exports.getCardItemByCartId = exports.getCardItemById = void 0;
const utils_1 = require("../utils");
const constants_1 = require("../utils/constants");
const CartItem_1 = require("../models/CartItem");
const Product_1 = require("../models/Product");
const cart_1 = require("./cart");
// get a specific cartItem by Id
const getCardItemById = async (cartItemId) => {
    return await CartItem_1.CartItem.findByPk(cartItemId, { include: { model: Product_1.Product } });
};
exports.getCardItemById = getCardItemById;
// get a specific cartItem by cartId and Product
const getCardItemByCartId = async (cartId, productId) => {
    return await CartItem_1.CartItem.findOne({ where: { cartId, productId } });
};
exports.getCardItemByCartId = getCardItemByCartId;
// get all cart items
const getAllCardItemsByCartId = async (cartId) => {
    return await CartItem_1.CartItem.findAll({
        where: { cartId },
        include: { model: Product_1.Product },
    });
};
exports.getAllCardItemsByCartId = getAllCardItemsByCartId;
// Calculate totla cart price
const calculateTotalPrice = async (cartId) => {
    const cartItems = await (0, exports.getAllCardItemsByCartId)(cartId);
    const cart = await (0, cart_1.getCardById)(cartId);
    if (!cart) {
        throw new utils_1.HttpException(constants_1.httpStatus.NOT_FOUND, utils_1.messages.cartResponse.CART_NOT_FOUND);
    }
    const discount = cart.discount;
    const deliveryFee = cart.deliveryFee;
    let totalPrice = 0;
    for (const cartItem of cartItems) {
        const productPrice = cartItem.product.price;
        const quantity = cartItem.quantity;
        totalPrice += productPrice * quantity;
    }
    totalPrice = totalPrice * (1 - discount / 100) + deliveryFee;
    return totalPrice;
};
exports.calculateTotalPrice = calculateTotalPrice;
// Add a new cartItems
const createCartItem = async ({ cartId, productId, quantity, }) => {
    const cartItem = await CartItem_1.CartItem.create({
        cartId,
        productId,
        quantity,
    });
    console.log({ cartItem });
    const newCartItem = await cartItem.save();
    return newCartItem;
};
exports.createCartItem = createCartItem;
// Remove cart item by id
const removeItemFromCartItem = async (cartItemId) => {
    return await CartItem_1.CartItem.destroy({ where: { id: cartItemId } });
};
exports.removeItemFromCartItem = removeItemFromCartItem;
// Update the cartItem qunatity
const updateCartItemQuantity = async (cartItemId, quantity, state) => {
    console.log({ cartItemId, quantity, state });
    return await CartItem_1.CartItem.update({ quantity: state === 'increment' ? (quantity += 1) : (quantity -= 1) }, { where: { id: cartItemId } });
};
exports.updateCartItemQuantity = updateCartItemQuantity;
// Function to create or update a cart item and update the total price
const createOrUpdateCartItem = async (cartId, productId, quantity, state) => {
    // Create or find the cart item
    const cartItem = await (0, exports.getCardItemByCartId)(cartId, productId);
    if (!cartItem) {
        await (0, exports.createCartItem)({ cartId, productId, quantity });
    }
    else {
        cartItem.quantity = quantity;
        await (0, exports.updateCartItemQuantity)(cartItem.id, quantity, state);
    }
    // Calculate the total price and update the cart
    const totalPrice = await (0, exports.calculateTotalPrice)(cartId);
    const cart = await (0, cart_1.getCardById)(cartId);
    if (cart) {
        cart.subTotal = totalPrice;
        await cart.save();
    }
    else {
        throw new utils_1.HttpException(constants_1.httpStatus.NOT_FOUND, utils_1.messages.cartResponse.CART_NOT_FOUND);
    }
};
exports.createOrUpdateCartItem = createOrUpdateCartItem;
//# sourceMappingURL=cartItems.js.map