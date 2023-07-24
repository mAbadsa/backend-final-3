import { NextFunction, Request, Response } from 'express';
declare const notFound: (_request: Request, response: Response) => void;
interface IError extends Error {
    status?: number;
}
declare const serverError: (error: IError, _request: Request, response: Response, _next: NextFunction) => void;
export { notFound, serverError };
