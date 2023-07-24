import { Router } from 'express';
import { getBrandProducts, getBrands } from '@controllers/brand';
const router = Router();

router.get('/', getBrands);
router.get('/products/:id', getBrandProducts);
router.get('/:id', getBrandProducts);

export default router;
