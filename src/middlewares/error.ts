import { NextFunction, Request, Response } from 'express';
import { constants, errorResponse } from '@utils/index';

const notFound = (_request: Request, response: Response): void => {
  response
    .status(constants.httpStatus.BAD_REQUEST)
    .json({ message: errorResponse.CLIENT });
};

interface IError extends Error {
  status?: number;
}

const serverError = (
  error: IError,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  response
    .status(error.status || constants.httpStatus.INTERNAL_SERVER_ERROR)
    .json({
      message: error.status ? error.message : errorResponse.SERVER,
    });
};

export { notFound, serverError };
