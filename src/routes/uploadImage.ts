import { Router } from 'express';
import { checkAuth } from '@middlewares/index';
import { uploadImage } from '@controllers/upload-image';

const router = Router();

router.route('/').post(checkAuth, uploadImage);

export default router;
