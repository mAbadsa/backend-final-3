"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryName = exports.getCategories = void 0;
const { Op } = require('sequelize');
const Category_1 = require("@/models/Category");
async function getCategories() {
    try {
        return await Category_1.Category.findAll();
    }
    catch (e) {
        return e;
    }
}
exports.getCategories = getCategories;
async function getCategoryName(id) {
    try {
        return await Category_1.Category.findByPk(id, { attributes: ['name'] });
    }
    catch (e) {
        return e;
    }
}
exports.getCategoryName = getCategoryName;
//# sourceMappingURL=category.js.map