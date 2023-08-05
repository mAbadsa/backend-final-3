"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_1 = require("@controllers/brand");
const router = (0, express_1.Router)();
router.get('/', brand_1.getBrands);
exports.default = router;
//# sourceMappingURL=brand.js.map