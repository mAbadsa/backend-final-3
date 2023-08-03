import express from 'express';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize-typescript';

import config from '@config';
import envVar from '@validations/envVar';
import {
  BrandRouters,
  CartItemsRouters,
  CartRouters,
  CategoryRouters,
  ProductRouters,
  UserRouters,
  UploadImageRouters,
  UserOrderRouters,
} from '@routes/index';
import { notFound, serverError } from '@middlewares/index';
import { UserOrder } from './models/UserOrder';

const { port, nodeEnv } = config.server;

class App {
  public app: express.Application;

  public env: string;

  public port: string | number;

  public dbConnection: Sequelize;

  constructor(dbConnection: Sequelize) {
    this.app = express();
    envVar();
    this.env = nodeEnv || 'development';
    this.port = port || 3000;

    this.dbConnection = dbConnection;
    this.connectToDatabase();

    this.initializeMiddlewares();
  }

  public listen(): void {
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

  private initializeMiddlewares(): void {
    this.app.use(
      cors({
        origin: ['http://localhost:3000'],
        credentials: true,
      })
    );
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));

    // app routers middleware
    this.app.use('/categories', CategoryRouters);
    this.app.use('/products', ProductRouters);
    this.app.use('/product', ProductRouters);
    this.app.use('/brands', BrandRouters);
    this.app.use('/carts', CartRouters);
    this.app.use('/cart-items', CartItemsRouters);
    this.app.use('/users', UserRouters);
    this.app.use('/upload-image', UploadImageRouters);
    this.app.use('/orders', UserOrderRouters);
    // Error middleware
    this.app.use([notFound, serverError]);
  }

  public getServer(): express.Application {
    return this.app;
  }

  private connectToDatabase(): void {
    this.dbConnection.sync({ force: false, alter: false });
  }
}

export default App;
