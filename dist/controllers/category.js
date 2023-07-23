"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryProducts = exports.getAllCategories = void 0;
const category_1 = require("../services/category");
const product_1 = require("../services/product");
const { Op } = require('sequelize');
const getAllCategories = async (req, res) => {
    try {
        const result = await (0, category_1.getCategories)();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getAllCategories = getAllCategories;
const getCategoryProducts = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await (0, product_1.getProductsByFilter)({ category_id: id });
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getCategoryProducts = getCategoryProducts;
//# sourceMappingURL=category.js.map