import { Response, NextFunction, Request } from 'express';
export declare const checkAuth: (request: Request, _res: Response, next: NextFunction) => Promise<void>;
