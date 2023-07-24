"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewArrivalsEarliestDate = exports.createProductFilter = exports.getProductsByFilter = void 0;
const sequelize_1 = require("sequelize");
const Product_1 = require("../models/Product");
const ProductsImage_1 = require("../models/ProductsImage");
async function getProductsByFilter(filter) {
    try {
        return await Product_1.Product.findAll({
            where: filter,
            include: ProductsImage_1.ProductImage,
        });
    }
    catch (e) {
        return e;
    }
}
exports.getProductsByFilter = getProductsByFilter;
function createProductFilter(query) {
    const { quantity, discount, rating, isNew, handpicked, minPrice, maxPrice } = query;
    const filter = {};
    if (quantity) {
        filter['quantity'] = {
            [sequelize_1.Op.lt]: quantity,
        };
    }
    if (discount) {
        filter['discount'] = {
            [sequelize_1.Op.gte]: discount,
        };
    }
    if (rating) {
        filter['rating'] = {
            [sequelize_1.Op.gte]: rating,
        };
    }
    if (handpicked == '1') {
        filter['rating'] = {
            [sequelize_1.Op.gte]: 4.5,
        };
        filter['price'] = {
            [sequelize_1.Op.lt]: 100,
        };
    }
    if (isNew == '1') {
        const threeMonthsAgo = getNewArrivalsEarliestDate();
        filter['createdAt'] = {
            [sequelize_1.Op.gte]: threeMonthsAgo,
        };
    }
    if (minPrice && maxPrice) {
        filter['price'] = {
            [sequelize_1.Op.between]: [minPrice, maxPrice],
        };
    }
    else if (minPrice) {
        filter['price'] = {
            [sequelize_1.Op.gte]: minPrice,
        };
    }
    else if (maxPrice) {
        filter['price'] = {
            [sequelize_1.Op.lte]: maxPrice,
        };
    }
    console.log(filter);
    return filter;
}
exports.createProductFilter = createProductFilter;
function getNewArrivalsEarliestDate() {
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    return date;
}
exports.getNewArrivalsEarliestDate = getNewArrivalsEarliestDate;
//# sourceMappingURL=product.js.map