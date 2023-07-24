import { ClassConstructor } from 'class-transformer';
import { RequestHandler } from 'express';
export declare const validationMiddleware: (type: ClassConstructor<object>, value?: string | 'body' | 'query' | 'params', skipMissingProperties?: boolean, whitelist?: boolean, forbidNonWhitelisted?: boolean) => RequestHandler;
export default validationMiddleware;
