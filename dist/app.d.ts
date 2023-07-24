import express from 'express';
import { Sequelize } from 'sequelize-typescript';
declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    dbConnection: Sequelize;
    constructor(dbConnection: Sequelize);
    listen(): void;
    private initializeMiddlewares;
    getServer(): express.Application;
    private connectToDatabase;
}
export default App;
