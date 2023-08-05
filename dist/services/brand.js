"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandName = exports.getAllBrands = void 0;
const Brand_1 = require("@/models/Brand");
async function getAllBrands() {
    try {
        return await Brand_1.Brand.findAll();
    }
    catch (e) {
        return e;
    }
}
exports.getAllBrands = getAllBrands;
async function getBrandName(id) {
    try {
        return await Brand_1.Brand.findByPk(id, { attributes: ['name'] });
    }
    catch (e) {
        return e;
    }
}
exports.getBrandName = getBrandName;
//# sourceMappingURL=brand.js.map