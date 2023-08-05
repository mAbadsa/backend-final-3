"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = exports.getUser = void 0;
const users_1 = require("@services/users");
const cart_1 = require("@services/cart");
const index_1 = require("@utils/index");
const getUser = async (req, res, next) => {
    const { userId } = req.params;
    const { httpStatus } = index_1.constants;
    const { authResponse } = index_1.messages;
    try {
        const user = await (0, users_1.getUserById)(+userId);
        if (!user) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, authResponse.NOT_EXIST_USER);
        }
        const { firstName, lastName, email } = user;
        res.status(httpStatus.OK).json({
            success: true,
            message: authResponse.SUCCESS,
            user: {
                firstName,
                lastName,
                email,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getUser = getUser;
/*
 * create a new user
 * request { body: { email, password, firstName, lastName }}
 * response { statusCode: 201, user: email, firstName, lastName }
 * validation {email, password, firstName, lastName}
 * */
const signup = async (req, res, next) => {
    const { email, firstName, lastName, password } = req.body;
    const { httpStatus } = index_1.constants;
    const { authResponse } = index_1.messages;
    try {
        const existedUser = await (0, users_1.getUserByEmail)(email);
        if (existedUser) {
            throw new index_1.HttpException(httpStatus.CONFLICT, authResponse.ALREADY_EXIST);
        }
        const newUser = await (0, users_1.createNewUser)({
            firstName,
            lastName,
            email,
            password,
        });
        newUser.save();
        const cart = await (0, cart_1.createNewCart)({
            userId: newUser.id,
            subTotal: 0,
            deliveryFee: 0,
            discount: 0,
            isOrdered: false,
        });
        cart.save();
        const [affectedCount] = await (0, users_1.updateUserCurrentCart)(newUser.id, cart.id);
        if (affectedCount !== 1) {
            throw new index_1.HttpException(httpStatus.INTERNAL_SERVER_ERROR, index_1.errorResponse.SERVER);
        }
        res.status(httpStatus.CREATED).json({
            success: true,
            message: authResponse.SUCCESS_SIGNUP,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.signup = signup;
const login = async (req, res, next) => {
    const { password, email } = req.body;
    const { httpStatus, expire } = index_1.constants;
    const { authResponse, token } = index_1.messages;
    try {
        const user = await (0, users_1.getUserByEmail)(email);
        if (!user) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, index_1.messages.authResponse.NOT_EXIST_USER);
        }
        const passwordMatch = await (0, index_1.comparePassword)(password, user.password);
        if (!passwordMatch) {
            throw new index_1.HttpException(httpStatus.UNAUTHORIZED, index_1.messages.authResponse.INCORRECT_PASSWORD);
        }
        const { id, firstName, lastName } = user;
        const genToken = await (0, index_1.signToken)({
            id: Number(id),
            firstName,
            lastName,
            email,
        }, { expiresIn: expire.EXP_5d });
        res
            .status(httpStatus.OK)
            .cookie(token.ACCESS_TOKEN || 'accessToken', genToken, {
            httpOnly: true,
        })
            .json({
            success: true,
            message: authResponse.SUCCESS_LOGIN,
            accessToken: genToken,
            user: {
                firstName,
                lastName,
                email,
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
//# sourceMappingURL=user.js.map