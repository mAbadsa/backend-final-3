import { Response, NextFunction, Request } from 'express';
import { constants, verifyToken, messages, HttpException } from '@utils/index';
import { getUserById } from '@services/users';

export const checkAuth = async (
  request: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const { authResponse } = messages;
  const { httpStatus } = constants;
  try {
    const { accessToken } = request.cookies;

    if (!accessToken) {
      throw new HttpException(
        httpStatus.UNAUTHORIZED,
        authResponse.UNAUTHORIZED
      );
    }

    const userPayload = await verifyToken(accessToken);

    const { id } = userPayload;

    const userData = await getUserById(id as number);

    if (!userData) {
      throw new HttpException(httpStatus.NOT_FOUND, authResponse.NOT_EXIST);
    }

    request.user = userData;

    next();
  } catch (error) {
    next(error);
  }
};
