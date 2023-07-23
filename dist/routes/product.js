"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getProducts);
router.get('/limited', product_1.getLimitedEdition);
router.get('/handpicked', product_1.getHandpicked);
router.get('/popular', product_1.getPopular);
router.get('/new', product_1.getNewArrivals);
router.get('/search', product_1.search);
exports.default = router;
//# sourceMappingURL=product.js.map