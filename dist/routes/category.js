"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const router = (0, express_1.Router)();
router.get('/', category_1.getAllCategories);
router.get('/products/:id', category_1.getCategoryProducts);
exports.default = router;
//# sourceMappingURL=category.js.map