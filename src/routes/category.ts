import { Router } from 'express';
import { getAllCategories, getCategoryProducts } from '@controllers/category';
const router = Router();

router.get('/', getAllCategories);
router.get('/products/:id', getCategoryProducts);
router.get('/:id', getCategoryProducts);

export default router;
