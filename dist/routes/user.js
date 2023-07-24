"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../middlewares/validation");
const userDto_1 = require("../dtos/userDto");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.route('/:userId').get(user_1.getUser);
router
    .route('/signup')
    .post((0, validation_1.validationMiddleware)(userDto_1.CreateUserDto, 'body'), user_1.signup);
router.route('/login').post((0, validation_1.validationMiddleware)(userDto_1.LoginUserDto, 'body'), user_1.login);
exports.default = router;
//# sourceMappingURL=user.js.map