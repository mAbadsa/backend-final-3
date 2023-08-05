"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const _config_1 = tslib_1.__importDefault(require("@config"));
const envVar_1 = tslib_1.__importDefault(require("@validations/envVar"));
const index_1 = require("@routes/index");
const index_2 = require("@middlewares/index");
const { port, nodeEnv } = _config_1.default.server;
class App {
    constructor(dbConnection) {
        this.app = (0, express_1.default)();
        (0, envVar_1.default)();
        this.env = nodeEnv || 'development';
        this.port = port || 3000;
        this.dbConnection = dbConnection;
        this.connectToDatabase();
        this.initializeMiddlewares();
    }
    listen() {
        process.once('SIGUSR2', function () {
            process.kill(process.pid, 'SIGUSR2');
        });
        process.on('SIGINT', function () {
            // this is only called on ctrl+c, not restart
            process.kill(process.pid, 'SIGINT');
        });
        this.app.listen(this.port, () => {
            console.log(`🚀 App listening on the port ${this.port}`);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
        // app routers middleware
        this.app.use('/categories', index_1.CategoryRouters);
        this.app.use('/products', index_1.ProductRouters);
        this.app.use('/product', index_1.ProductRouters);
        this.app.use('/brands', index_1.BrandRouters);
        this.app.use('/carts', index_1.CartRouters);
        this.app.use('/cart-items', index_1.CartItemsRouters);
        this.app.use('/users', index_1.UserRouters);
        this.app.use('/upload-image', index_1.UploadImageRouters);
        this.app.use('/orders', index_1.UserOrderRouters);
        // Error middleware
        this.app.use([index_2.notFound, index_2.serverError]);
    }
    getServer() {
        return this.app;
    }
    connectToDatabase() {
        this.dbConnection.sync({ force: false, alter: false });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map