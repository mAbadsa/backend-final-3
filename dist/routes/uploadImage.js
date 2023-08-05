"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("@middlewares/index");
const upload_image_1 = require("@controllers/upload-image");
const router = (0, express_1.Router)();
router.route('/').post(index_1.checkAuth, upload_image_1.uploadImage);
exports.default = router;
//# sourceMappingURL=uploadImage.js.map