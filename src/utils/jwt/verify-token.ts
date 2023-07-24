import { verify } from 'jsonwebtoken';
import { IUserInfo } from '@interfaces/index';
import config from '@config';

const { secretKey } = config.server;

export default (token: string): Promise<IUserInfo> =>
  new Promise((resolve, reject) => {
    verify(token, secretKey, {}, (err, match): void => {
      if (err) reject(err);
      resolve(match as IUserInfo);
    });
  });
