import { Request, Response, NextFunction } from 'express';
export declare const getCartItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllCartItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateQuantity: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const createNewCartItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteCartItem: (req: Request, res: Response, next: NextFunction) => Promise<void>;
