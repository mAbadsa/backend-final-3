import { sign, Secret } from 'jsonwebtoken';
import { IUserInfo } from '@interfaces/index';
import config from '@config';

const { secretKey } = config.server;

export default (user: IUserInfo, options: object): Promise<string> =>
  new Promise((resolve, reject) => {
    sign(user, secretKey as Secret, options, (err, token) => {
      if (err) return reject(err);
      return resolve(token as string);
    });
  });
