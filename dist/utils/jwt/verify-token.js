"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = tslib_1.__importDefault(require("../../config"));
const { secretKey } = _config_1.default.server;
exports.default = (token) => new Promise((resolve, reject) => {
    (0, jsonwebtoken_1.verify)(token, secretKey, {}, (err, match) => {
        if (err)
            reject(err);
        resolve(match);
    });
});
//# sourceMappingURL=verify-token.js.map