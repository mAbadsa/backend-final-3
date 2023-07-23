import { Request, Response, NextFunction } from 'express';
export declare const getCart: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const addCart: (req: Request, res: Response, next: NextFunction) => Promise<void>;
