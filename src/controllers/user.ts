import { Request, Response, NextFunction } from 'express';
import {
  getUserByEmail,
  getUserById,
  createNewUser,
  updateUserById,
} from '@services/users';
import { createNewCart } from '@services/cart';
import {
  HttpException,
  messages,
  constants,
  comparePassword,
  signToken,
  errorResponse,
} from '@utils/index';

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = req.params;
  const { httpStatus } = constants;
  const { authResponse } = messages;

  try {
    const user = await getUserById(+userId);

    if (!user) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        authResponse.NOT_EXIST_USER
      );
    }

    const { firstName, lastName, email } = user;
    res.status(httpStatus.OK).json({
      success: true,
      message: authResponse.SUCCESS,
      user: {
        firstName,
        lastName,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

/*
 * create a new user
 * request { body: { email, password, firstName, lastName }}
 * response { statusCode: 201, user: email, firstName, lastName }
 * validation {email, password, firstName, lastName}
 * */
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, firstName, lastName, password } = req.body;
  const { httpStatus } = constants;
  const { authResponse } = messages;
  try {
    const existedUser = await getUserByEmail(email);
    console.log({ existedUser });
    if (existedUser) {
      throw new HttpException(httpStatus.CONFLICT, authResponse.ALREADY_EXIST);
    }

    const newUser = await createNewUser({
      firstName,
      lastName,
      email,
      password,
    });

    newUser.save();
    const cart = await createNewCart({
      userId: newUser.id,
      subTotal: 0,
      deliveryFee: 0,
      discount: 0,
      isOrdered: false,
    });

    cart.save();

    const [affectedCount] = await updateUserById(newUser.id, cart.id);

    if (affectedCount !== 1) {
      throw new HttpException(
        httpStatus.INTERNAL_SERVER_ERROR,
        errorResponse.SERVER
      );
    }

    console.log({ newUser, affectedCount });

    res.status(httpStatus.CREATED).json({
      success: true,
      message: authResponse.SUCCESS_SIGNUP,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { password, email } = req.body;
  const { httpStatus, expire } = constants;
  const { authResponse, token } = messages;
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new HttpException(
        httpStatus.NOT_FOUND,
        messages.authResponse.NOT_EXIST_USER
      );
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      throw new HttpException(
        httpStatus.UNAUTHORIZED,
        messages.authResponse.INCORRECT_PASSWORD
      );
    }

    const { id, firstName, lastName } = user;

    const genToken = await signToken(
      {
        id: Number(id),
        firstName,
        lastName,
        email,
      },
      { expiresIn: expire.EXP_5d }
    );

    res
      .status(httpStatus.OK)
      .cookie(token.ACCESS_TOKEN, genToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      .json({
        success: true,
        message: authResponse.SUCCESS_LOGIN,
        user: {
          firstName,
          lastName,
          email,
        },
      });
  } catch (error) {
    next(error);
  }
};
