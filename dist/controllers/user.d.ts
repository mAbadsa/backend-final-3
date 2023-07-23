import { Request, Response, NextFunction } from 'express';
export declare const getUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const signup: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
