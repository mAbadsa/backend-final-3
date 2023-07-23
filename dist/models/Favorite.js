"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("./Product");
const User_1 = require("./User");
let Favorite = exports.Favorite = class Favorite extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User, 'user_id'),
    tslib_1.__metadata("design:type", User_1.User)
], Favorite.prototype, "user", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Product_1.Product, 'product_id'),
    tslib_1.__metadata("design:type", Array)
], Favorite.prototype, "products", void 0);
exports.Favorite = Favorite = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'favorites',
    })
], Favorite);
//# sourceMappingURL=Favorite.js.map