import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { HttpException } from '@utils/HttpExceptions';
import { httpStatus } from '@/utils/constants';

export const validationMiddleware =
  (
    type: ClassConstructor<object>,
    value: string | 'body' | 'query' | 'params' = 'body',
    skipMissingProperties = false,
    whitelist = true,
    forbidNonWhitelisted = true
  ): RequestHandler =>
  (req, res, next) => {
    validate(plainToInstance(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted,
    }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .map((error: ValidationError) => Object.values(error.constraints))
          .join(', ');
        next(new HttpException(httpStatus.BAD_REQUEST, message));
      } else {
        next();
      }
    });
  };

export default validationMiddleware;
