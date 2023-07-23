"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv = tslib_1.__importStar(require("dotenv"));
const envalid_1 = require("envalid");
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: path_1.default.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
    });
}
function validateEnv() {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)(),
        DB_DAILECT: (0, envalid_1.str)(),
        DB_HOST: (0, envalid_1.str)(),
        DB_USERNAME: (0, envalid_1.str)(),
        DB_PASS: (0, envalid_1.str)(),
        DB_NAME: (0, envalid_1.str)(),
        DB_LOGGING: (0, envalid_1.str)(),
        JWT_SECRET: (0, envalid_1.str)(),
    });
}
exports.default = validateEnv;
//# sourceMappingURL=envVar.js.map