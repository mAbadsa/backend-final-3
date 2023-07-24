"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.notFound = void 0;
const index_1 = require("../utils/index");
const notFound = (_request, response) => {
    response
        .status(index_1.constants.httpStatus.BAD_REQUEST)
        .json({ message: index_1.errorResponse.CLIENT });
};
exports.notFound = notFound;
const serverError = (error, _request, response, _next) => {
    response
        .status(error.status || index_1.constants.httpStatus.INTERNAL_SERVER_ERROR)
        .json({
        message: error.status ? error.message : index_1.errorResponse.SERVER,
    });
};
exports.serverError = serverError;
//# sourceMappingURL=error.js.map