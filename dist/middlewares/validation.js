"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const HttpExceptions_1 = require("../utils/HttpExceptions");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) => (req, res, next) => {
    (0, class_validator_1.validate)((0, class_transformer_1.plainToInstance)(type, req[value]), {
        skipMissingProperties,
        whitelist,
        forbidNonWhitelisted,
    }).then((errors) => {
        if (errors.length > 0) {
            const message = errors
                .map((error) => Object.values(error.constraints))
                .join(', ');
            next(new HttpExceptions_1.HttpException(400, message));
        }
        else {
            next();
        }
    });
};
exports.validationMiddleware = validationMiddleware;
exports.default = exports.validationMiddleware;
//# sourceMappingURL=validation.js.map