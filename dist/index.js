"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _app_1 = tslib_1.__importDefault(require("./app"));
const index_1 = require("./database/index");
const app = new _app_1.default(index_1.dbConnection);
app.listen();
//# sourceMappingURL=index.js.map