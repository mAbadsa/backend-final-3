"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrands = void 0;
const brand_1 = require("@/services/brand");
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
//# sourceMappingURL=brand.js.map