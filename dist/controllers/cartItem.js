"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartItem = exports.createNewCartItem = exports.updateQuantity = exports.getAllCartItem = exports.getCartItem = void 0;
const cartItems_1 = require("@services/cartItems");
const cart_1 = require("@services/cart");
const index_1 = require("@utils/index");
const getCartItem = async (req, res, next) => {
    const { cartItemId } = req.params;
    const { httpStatus } = index_1.constants;
    try {
        const cartItem = await (0, cartItems_1.getCardItemById)(+cartItemId);
        res
            .status(httpStatus.OK)
            .json({ success: true, message: 'OK', cartItem: cartItem });
    }
    catch (error) {
        next(error);
    }
};
exports.getCartItem = getCartItem;
const getAllCartItem = async (req, res, next) => {
    const { httpStatus } = index_1.constants;
    try {
        const cartItemts = await (0, cartItems_1.getAllCardItemsByCartId)(req.user.currentCartId);
        res
            .status(httpStatus.OK)
            .json({ success: true, message: 'OK', cartItemts });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllCartItem = getAllCartItem;
const updateQuantity = async (req, res, next) => {
    const { state } = req.body;
    const { cartItemId } = req.params;
    const userCartId = req.user.currentCartId;
    const { httpStatus } = index_1.constants;
    const { cartItemResponse, generalResponse } = index_1.messages;
    try {
        const cartItem = await (0, cartItems_1.getCardItemById)(+cartItemId);
        if (!cartItem) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, cartItemResponse.ITEM_NOT_FOUND);
        }
        await (0, cartItems_1.updateCartItemQuantity)(+cartItemId, cartItem.quantity, state);
        const cart = await (0, cart_1.getCartById)(userCartId);
        if (!cart) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, index_1.messages.cartResponse.CART_NOT_FOUND);
        }
        const totalPrice = await (0, cartItems_1.calculateTotalPrice)(userCartId);
        cart.subTotal = totalPrice;
        await cart.save();
        res.status(httpStatus.OK).json({
            success: true,
            message: generalResponse.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
            cartItem,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateQuantity = updateQuantity;
const createNewCartItem = async (req, res, next) => {
    const { quantity, productId } = req.body;
    const { httpStatus } = index_1.constants;
    const { generalResponse } = index_1.messages;
    try {
        const userCartId = req.user.currentCartId;
        const cart = await (0, cart_1.getCartById)(userCartId);
        if (!cart) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, index_1.messages.cartResponse.CART_NOT_FOUND);
        }
        const existingCartItem = cart.items.find((item) => item.productId === productId);
        if (existingCartItem) {
            // Product already exists in cart, increment the quantity by 1
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            await (0, cartItems_1.createOrUpdateCartItem)(userCartId, productId, quantity);
            res.status(httpStatus.OK).json({
                message: generalResponse.UPDATE_CART_ITEM_QUANTITY_SUCCESS,
                cartItem: existingCartItem,
            });
        }
        else {
            // Product not found in cart, create a new cart item
            const cartItem = await (0, cartItems_1.createCartItem)({
                productId,
                quantity,
                cartId: userCartId,
            });
            await (0, cartItems_1.createOrUpdateCartItem)(userCartId, productId, quantity);
            res.status(httpStatus.CREATED).json({
                message: generalResponse.CREATE_CART_ITEM_SUCCESS,
                cartItem,
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.createNewCartItem = createNewCartItem;
const deleteCartItem = async (req, res, next) => {
    const { cartItemId } = req.params;
    const userCartId = req.user.currentCartId;
    const { httpStatus } = index_1.constants;
    const { generalResponse } = index_1.messages;
    try {
        const numberReflect = await (0, cartItems_1.removeItemFromCartItem)(+cartItemId);
        if (numberReflect !== 1) {
            throw new index_1.HttpException(httpStatus.INTERNAL_SERVER_ERROR, index_1.errorResponse.SERVER);
        }
        const cart = await (0, cart_1.getCartById)(userCartId);
        if (!cart) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, index_1.messages.cartResponse.CART_NOT_FOUND);
        }
        const totalPrice = await (0, cartItems_1.calculateTotalPrice)(userCartId);
        cart.subTotal = totalPrice;
        await cart.save();
        res
            .status(httpStatus.CREATED)
            .json({ message: generalResponse.DELETE_CART_ITEM_SUCCESS });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteCartItem = deleteCartItem;
//# sourceMappingURL=cartItem.js.map