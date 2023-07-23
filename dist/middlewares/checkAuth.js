"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const index_1 = require("../utils/index");
const users_1 = require("../services/users");
const checkAuth = async (request, _res, next) => {
    const { authResponse } = index_1.messages;
    const { httpStatus } = index_1.constants;
    try {
        const { accessToken } = request.cookies;
        if (!accessToken) {
            throw new index_1.HttpException(httpStatus.UNAUTHORIZED, authResponse.UNAUTHORIZED);
        }
        const userPayload = await (0, index_1.verifyToken)(accessToken);
        const { id } = userPayload;
        const userData = await (0, users_1.getUserById)(id);
        if (!userData) {
            throw new index_1.HttpException(httpStatus.NOT_FOUND, authResponse.NOT_EXIST);
        }
        request.user = userData;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map