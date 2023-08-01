import { createOrder, getUserOrders } from '@/controllers/UserOrder';
import { checkAuth } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.route('/').post(checkAuth, createOrder);
router.route('/').get(checkAuth, getUserOrders);

export default router;
