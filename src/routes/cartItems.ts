import { Router } from 'express';
import { checkAuth, validationMiddleware } from '@middlewares/index';
import {
  getCartItem,
  updateQuantity,
  createNewCartItem,
  deleteCartItem,
  getAllCartItem,
} from '@controllers/cartItem';
import {
  CreateCartItemBodyDto,
  GetCartItemParamDto,
  UpdateCartItemBodyDto,
} from '@dtos/cartItems.dto';

const router = Router();

router
  .route('/:cartItemId')
  .get(
    validationMiddleware(GetCartItemParamDto, 'params'),
    checkAuth,
    getCartItem
  )
  .patch(
    validationMiddleware(UpdateCartItemBodyDto, 'body'),
    validationMiddleware(GetCartItemParamDto, 'params'),
    checkAuth,
    updateQuantity
  )
  .delete(
    validationMiddleware(GetCartItemParamDto, 'params'),
    checkAuth,
    deleteCartItem
  );

router
  .route('/')
  .get(checkAuth, getAllCartItem)
  .post(
    validationMiddleware(CreateCartItemBodyDto, 'body'),
    checkAuth,
    createNewCartItem
  );

export default router;
