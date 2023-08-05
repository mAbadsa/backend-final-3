import type { Request, Response, NextFunction } from 'express';
type Data = {
    success?: boolean;
    imageUrl?: string;
    message?: string;
};
export declare const uploadImage: (req: Request, res: Response<Data>, next: NextFunction) => Promise<Response<Data, Record<string, any>>>;
export {};
