"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getCategoryProducts = exports.getBrandProducts = exports.updateProducts = exports.deleteProducts = exports.createProducts = exports.search = exports.getProducts = exports.getHandpicked = exports.getNewArrivals = exports.getPopular = exports.getLimitedEdition = void 0;
const sequelize_1 = require("sequelize");
const Product_1 = require("@models/Product");
const Brand_1 = require("@models/Brand");
const product_1 = require("@services/product");
const brand_1 = require("@/services/brand");
const category_1 = require("@/services/category");
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
                    { title: { [sequelize_1.Op.like]: `%${keyword}%` } },
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
const createProducts = async (req, res) => {
    try {
        const newProduct = await Product_1.Product.create(Object.assign({}, req.body));
        return res.status(200).json(newProduct);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.createProducts = createProducts;
const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const isDeleted = await Product_1.Product.destroy({
            where: {
                id: id,
            },
        });
        let result = "Product couldn't be deleted";
        if (isDeleted == 1) {
            result = 'Product has been successfully deleted';
        }
        return res.status(200).json({ result: result });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.deleteProducts = deleteProducts;
const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const isUpdated = await Product_1.Product.update(Object.assign({}, req.body), {
            where: { id: id },
        });
        let result = "Product couldn't be updated";
        if (isUpdated[0] == 1) {
            result = 'Product has been successfully updated';
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.updateProducts = updateProducts;
const getBrandProducts = async (req, res) => {
    const { id } = req.params;
    const myQuery = req.query;
    myQuery.brand_id = id;
    const filter = (0, product_1.createProductFilter)(myQuery);
    try {
        const products = await (await (0, product_1.getProductsByFilter)(filter)).products;
        const brandName = (await (0, brand_1.getBrandName)(id)).dataValues;
        return res.status(200).json({ brandName, products });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getBrandProducts = getBrandProducts;
const getCategoryProducts = async (req, res) => {
    const { id } = req.params;
    const myQuery = req.query;
    myQuery.category_id = id;
    try {
        const filter = (0, product_1.createProductFilter)(myQuery);
        const categoryName = (await (0, category_1.getCategoryName)(id)).dataValues;
        const products = await (await (0, product_1.getProductsByFilter)(filter)).products;
        return res.status(200).json({ categoryName, products });
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getCategoryProducts = getCategoryProducts;
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const _id = parseInt(id);
        const result = await (0, product_1.getOneProduct)(_id);
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};
exports.getProductById = getProductById;
//# sourceMappingURL=product.js.map