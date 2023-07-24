"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBrands = void 0;
const Brand_1 = require("../models/Brand");
async function getAllBrands() {
    try {
        return await Brand_1.Brand.findAll();
    }
    catch (e) {
        return e;
    }
}
exports.getAllBrands = getAllBrands;
//# sourceMappingURL=brand.js.map