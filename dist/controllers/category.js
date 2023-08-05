"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = void 0;
const category_1 = require("@/services/category");
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
//# sourceMappingURL=category.js.map