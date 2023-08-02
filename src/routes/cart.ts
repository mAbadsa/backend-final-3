import { Router } from 'express';
import { validationMiddleware, checkAuth } from '@middlewares/index';
import { addCart, getCart } from '@controllers/cart';
import { CartBodyDto, GetCartQueryDto } from '@dtos/carts.dto';

const router = Router();

router.route('/').get(checkAuth, getCart);
//.post(validationMiddleware(CartBodyDto, 'body'), checkAuth, addCart);

export default router;
