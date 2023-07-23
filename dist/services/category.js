"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const { Op } = require('sequelize');
const Category_1 = require("../models/Category");
async function getCategories() {
    try {
        return await Category_1.Category.findAll();
    }
    catch (e) {
        return e;
    }
}
exports.getCategories = getCategories;
//# sourceMappingURL=category.js.map