"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderRouters = exports.UploadImageRouters = exports.UserRouters = exports.CategoryRouters = exports.BrandRouters = exports.ProductRouters = exports.CartItemsRouters = exports.CartRouters = void 0;
var cart_1 = require("./cart");
Object.defineProperty(exports, "CartRouters", { enumerable: true, get: function () { return __importDefault(cart_1).default; } });
var cartItems_1 = require("./cartItems");
Object.defineProperty(exports, "CartItemsRouters", { enumerable: true, get: function () { return __importDefault(cartItems_1).default; } });
var product_1 = require("./product");
Object.defineProperty(exports, "ProductRouters", { enumerable: true, get: function () { return __importDefault(product_1).default; } });
var brand_1 = require("./brand");
Object.defineProperty(exports, "BrandRouters", { enumerable: true, get: function () { return __importDefault(brand_1).default; } });
var category_1 = require("./category");
Object.defineProperty(exports, "CategoryRouters", { enumerable: true, get: function () { return __importDefault(category_1).default; } });
var user_1 = require("./user");
Object.defineProperty(exports, "UserRouters", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
var uploadImage_1 = require("./uploadImage");
Object.defineProperty(exports, "UploadImageRouters", { enumerable: true, get: function () { return __importDefault(uploadImage_1).default; } });
var UserOrder_1 = require("./UserOrder");
Object.defineProperty(exports, "UserOrderRouters", { enumerable: true, get: function () { return __importDefault(UserOrder_1).default; } });
//# sourceMappingURL=index.js.map