"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const tslib_1 = require("tslib");
const cloudinary_1 = tslib_1.__importDefault(require("@utils/cloudinary"));
const index_1 = require("@utils/index");
const uploadImage = async (req, res, next) => {
    const { data } = req.body;
    const { httpStatus } = index_1.constants;
    try {
        if (!data) {
            throw new index_1.HttpException(httpStatus.BAD_REQUEST, index_1.messages.authResponse.BAD_REQUEST);
        }
        const { url } = await cloudinary_1.default.v2.uploader.upload(data, {
            upload_preset: 'slbhisgh',
        });
        return res.status(httpStatus.OK).json({
            success: true,
            imageUrl: url,
            message: index_1.messages.imageResponse.uploadSuccess,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=upload-image.js.map