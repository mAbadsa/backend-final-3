"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandProducts = exports.getBrands = void 0;
const product_1 = require("../services/product");
const brand_1 = require("../services/brand");
const { Op } = require('sequelize');
const getBrands = async (req, res) => {
    try {
        const result = await (0, brand_1.getAllBrands)();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getBrands = getBrands;
const getBrandProducts = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await (0, product_1.getProductsByFilter)({ brand_id: id });
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getBrandProducts = getBrandProducts;
//# sourceMappingURL=brand.js.map