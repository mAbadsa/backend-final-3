import App from '@app';
import { dbConnection } from '@database/index';

const app = new App(dbConnection);

app.listen();
