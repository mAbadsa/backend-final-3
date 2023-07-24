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
} from '@routes/index';
import { notFound, serverError } from '@middlewares/index';

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
    this.app.use(cors({ origin: '*' }));
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    // app routers middleware
    this.app.use('/categories', CategoryRouters);
    this.app.use('/products', ProductRouters);
    this.app.use('/brands', BrandRouters);
    this.app.use('/carts', CartRouters);
    this.app.use('/cart-items', CartItemsRouters);
    this.app.use('/users', UserRouters);
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
