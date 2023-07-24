"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.getProducts = exports.getHandpicked = exports.getNewArrivals = exports.getPopular = exports.getLimitedEdition = void 0;
const sequelize_1 = require("sequelize");
const Product_1 = require("../models/Product");
const Brand_1 = require("../models/Brand");
const product_1 = require("../services/product");
const getLimitedEdition = async (req, res) => {
    const FilterData = req.query;
    FilterData.quantity = '20';
    const filter = (0, product_1.createProductFilter)(FilterData);
    try {
        const result = await (0, product_1.getProductsByFilter)(filter);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getLimitedEdition = getLimitedEdition;
const getPopular = async (req, res) => {
    const FilterData = req.query;
    FilterData.rating = '4.5';
    const filter = (0, product_1.createProductFilter)(FilterData);
    try {
        const result = await (0, product_1.getProductsByFilter)(filter);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getPopular = getPopular;
const getNewArrivals = async (req, res) => {
    const FilterData = req.query;
    FilterData.isNew = '1';
    const filter = (0, product_1.createProductFilter)(FilterData);
    try {
        const result = await (0, product_1.getProductsByFilter)(filter);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getNewArrivals = getNewArrivals;
const getHandpicked = async (req, res) => {
    const filter = (0, product_1.createProductFilter)({ handpicked: '1' });
    try {
        const result = await (0, product_1.getProductsByFilter)(filter);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getHandpicked = getHandpicked;
const getProducts = async (req, res) => {
    const filter = (0, product_1.createProductFilter)(req.query);
    try {
        const result = await (0, product_1.getProductsByFilter)(filter);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getProducts = getProducts;
const search = async (req, res) => {
    const { keyword } = req.query;
    try {
        const products = await Product_1.Product.findAll({
            include: [
                {
                    model: Brand_1.Brand,
                },
            ],
            where: {
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.like]: `%${keyword}%` } },
                    { '$brand.name$': { [sequelize_1.Op.like]: `%${keyword}%` } },
                ],
            },
        });
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.search = search;
//# sourceMappingURL=product.js.map