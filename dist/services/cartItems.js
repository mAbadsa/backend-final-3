"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrUpdateCartItem = exports.updateCartItemQuantity = exports.removeItemFromCartItem = exports.createCartItem = exports.calculateTotalPrice = exports.getAllCardItemsByCartId = exports.getCartItemByCartId = exports.getCardItemById = void 0;
const utils_1 = require("@/utils");
const constants_1 = require("@/utils/constants");
const CartItem_1 = require("@models/CartItem");
const Product_1 = require("@models/Product");
const cart_1 = require("@services/cart");
// get a specific cartItem by Id
const getCardItemById = async (cartItemId) => {
    return await CartItem_1.CartItem.findByPk(cartItemId, { include: { model: Product_1.Product } });
};
exports.getCardItemById = getCardItemById;
// get a specific cartItem by cartId and Product
//todo: they will need to update the cart item (Quantity)
const getCartItemByCartId = async (cartId, productId) => {
    return await CartItem_1.CartItem.findOne({ where: { cartId, productId } });
};
exports.getCartItemByCartId = getCartItemByCartId;
//todo: this should return cart, include cart items
//no need to ask for all items, they will ask for the cart including cart items
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
    const cart = await (0, cart_1.getCartById)(cartId);
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
    if (state === 'increment') {
        quantity = quantity + 1;
    }
    else if (state === 'decrement') {
        quantity = quantity - 1;
    }
    return await CartItem_1.CartItem.update({ quantity: quantity }, { where: { id: cartItemId } });
};
exports.updateCartItemQuantity = updateCartItemQuantity;
// Function to create or update a cart item and update the total price
const createOrUpdateCartItem = async (cartId, productId, quantity, state) => {
    // Create or find the cart item
    const cartItem = await (0, exports.getCartItemByCartId)(cartId, productId);
    if (!cartItem) {
        await (0, exports.createCartItem)({ cartId, productId, quantity });
    }
    else {
        cartItem.quantity = quantity;
        await (0, exports.updateCartItemQuantity)(cartItem.id, quantity, state);
    }
    // Calculate the total price and update the cart
    const totalPrice = await (0, exports.calculateTotalPrice)(cartId);
    const cart = await (0, cart_1.getCartById)(cartId);
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