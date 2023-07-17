import app from './app';
import config from './config';

const { port } = config.server;

app.listen(port, () => {
  console.log('Server is running on port:', port);
});
