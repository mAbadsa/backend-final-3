"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserById = exports.updateUserById = exports.createNewUser = exports.getUserByEmail = exports.getUserById = void 0;
const User_1 = require("../models/User");
const getUserById = async (userId) => {
    console.log({ userId });
    return await User_1.User.findByPk(userId);
};
exports.getUserById = getUserById;
const getUserByEmail = async (email) => {
    console.log({ email });
    return await User_1.User.findOne({ where: { email } });
};
exports.getUserByEmail = getUserByEmail;
const createNewUser = async ({ firstName, lastName, email, password, }) => {
    console.log({
        firstName,
        lastName,
        email,
        password,
    });
    const user = await User_1.User.create({
        firstName,
        lastName,
        email,
        password,
    });
    const newUser = await user.save();
    return newUser;
};
exports.createNewUser = createNewUser;
const updateUserById = async (userId, cartId) => {
    return await User_1.User.update({ currentCartId: cartId }, { where: { id: userId } });
};
exports.updateUserById = updateUserById;
const removeUserById = async (userId) => {
    return await User_1.User.destroy({ where: { id: userId } });
};
exports.removeUserById = removeUserById;
//# sourceMappingURL=users.js.map