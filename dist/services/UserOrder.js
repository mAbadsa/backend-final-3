"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserOrder = exports.getAllUserOrders = void 0;
const Cart_1 = require("@/models/Cart");
const UserOrder_1 = require("@/models/UserOrder");
const cart_1 = require("./cart");
const users_1 = require("./users");
const getAllUserOrders = async (user_id) => {
    return await UserOrder_1.UserOrder.findAll({ where: { user_id: user_id } });
};
exports.getAllUserOrders = getAllUserOrders;
const createUserOrder = async (user) => {
    const currentCart = await (0, cart_1.getCartById)(user.currentCartId);
    const userId = user.id;
    if (currentCart.subTotal === 0 || currentCart.isOrdered == true) {
        return null;
    }
    const userOrder = await UserOrder_1.UserOrder.create({
        email: user.email,
        status: 'ordered',
        cart_id: user.currentCartId,
        user_id: userId,
    });
    await Cart_1.Cart.update({ isOrdered: true }, { where: { id: user.currentCartId } });
    const newCart = await (0, cart_1.createNewCart)({
        userId: user.id,
        discount: 0,
        subTotal: 0,
        deliveryFee: 12,
        isOrdered: false,
    });
    await (0, users_1.updateUserCurrentCart)(userId, newCart.dataValues.id);
    return userOrder;
};
exports.createUserOrder = createUserOrder;
//# sourceMappingURL=UserOrder.js.map