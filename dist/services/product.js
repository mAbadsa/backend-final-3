"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewArrivalsEarliestDate = exports.createProductFilter = exports.getOneProduct = exports.getProductsByFilter = void 0;
const sequelize_1 = require("sequelize");
const Product_1 = require("@models/Product");
const ProductsImage_1 = require("@/models/ProductsImage");
const Brand_1 = require("@/models/Brand");
const Category_1 = require("@/models/Category");
async function getProductsByFilter(filter) {
    try {
        //return await Product.findAll(filter);
        const data = await Product_1.Product.findAndCountAll(filter);
        const products = data.rows;
        const count = data.count;
        const limit = filter.limit;
        let pagesNumber = Math.ceil(count / limit);
        return { products, pagesNumber };
    }
    catch (e) {
        return e;
    }
}
exports.getProductsByFilter = getProductsByFilter;
async function getOneProduct(id) {
    try {
        return await Product_1.Product.findByPk(id, {
            //include: [Brand, ProductImage, Category],
            include: [
                { model: ProductsImage_1.ProductImage },
                {
                    model: Brand_1.Brand,
                    attributes: ['name'],
                },
                {
                    model: Category_1.Category,
                    attributes: ['name'],
                },
            ],
        });
    }
    catch (e) {
        return e;
    }
}
exports.getOneProduct = getOneProduct;
function createProductFilter(query) {
    const { quantity, discount, rating, isNew, handpicked, minPrice, maxPrice, pageLimit, pageNumber, brand_id, category_id, } = query;
    const limit = pageLimit ? Number(pageLimit) : 9; // default is 9
    const offset = pageNumber ? (Number(pageNumber) - 1) * limit : 0; // offset default is 0
    /*const attributes: string[] = [
      'id',
      'title',
      'sub_title',
      'rating',
      'rating_count',
      'price',
      'discount',
    ];*/
    const where = {};
    if (quantity) {
        where['quantity'] = {
            [sequelize_1.Op.lte]: quantity,
        };
    }
    if (category_id) {
        where['category_id'] = category_id;
    }
    if (brand_id) {
        where['brand_id'] = brand_id;
    }
    if (discount) {
        where['discount'] = {
            [sequelize_1.Op.gte]: discount,
        };
    }
    if (rating) {
        where['rating'] = {
            [sequelize_1.Op.gte]: rating,
        };
    }
    if (handpicked == '1') {
        where['rating'] = {
            [sequelize_1.Op.gte]: 4.5,
        };
        where['price'] = {
            [sequelize_1.Op.lt]: 100,
        };
    }
    if (isNew == '1') {
        const threeMonthsAgo = getNewArrivalsEarliestDate();
        where['createdAt'] = {
            [sequelize_1.Op.gte]: threeMonthsAgo,
        };
    }
    if (minPrice && maxPrice) {
        where['price'] = {
            [sequelize_1.Op.between]: [minPrice, maxPrice],
        };
    }
    else if (minPrice) {
        where['price'] = {
            [sequelize_1.Op.gte]: minPrice,
        };
    }
    else if (maxPrice) {
        where['price'] = {
            [sequelize_1.Op.lte]: maxPrice,
        };
    }
    return { where, limit, offset, include: ProductsImage_1.ProductImage };
}
exports.createProductFilter = createProductFilter;
function getNewArrivalsEarliestDate() {
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    return date;
}
exports.getNewArrivalsEarliestDate = getNewArrivalsEarliestDate;
//# sourceMappingURL=product.js.map