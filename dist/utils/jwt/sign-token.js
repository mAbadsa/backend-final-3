"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = tslib_1.__importDefault(require("../../config"));
const { secretKey } = _config_1.default.server;
exports.default = (user, options) => new Promise((resolve, reject) => {
    (0, jsonwebtoken_1.sign)(user, secretKey, options, (err, token) => {
        if (err)
            return reject(err);
        return resolve(token);
    });
});
//# sourceMappingURL=sign-token.js.map