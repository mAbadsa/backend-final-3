/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Request, Response, NextFunction } from 'express';
import cloudinary from '@utils/cloudinary';
import { HttpException, constants, messages } from '@utils/index';
type Data = {
  success?: boolean;
  imageUrl?: string;
  message?: string;
};

export const uploadImage = async (
  req: Request,
  res: Response<Data>,
  next: NextFunction
): Promise<Response<Data, Record<string, any>>> => {
  const { data } = req.body;
  const { httpStatus } = constants;
  try {
    if (!data) {
      throw new HttpException(
        httpStatus.BAD_REQUEST,
        messages.authResponse.BAD_REQUEST
      );
    }

    const { url } = await cloudinary.v2.uploader.upload(data, {
      upload_preset: 'slbhisgh',
    });

    return res.status(httpStatus.OK).json({
      success: true,
      imageUrl: url,
      message: messages.imageResponse.uploadSuccess,
    });
  } catch (error: any) {
    next(error);
  }
};
