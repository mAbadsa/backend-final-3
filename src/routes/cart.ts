import { Router } from 'express';
import { validationMiddleware, checkAuth } from '@middlewares/index';
import { getCart } from '@controllers/cart';
import { CartBodyDto, GetCartQueryDto } from '@dtos/carts.dto';

const router = Router();

router.route('/').get(checkAuth, getCart);

export default router;
