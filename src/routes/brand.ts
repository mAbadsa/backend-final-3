import { Router } from 'express';
import { getBrands } from '@controllers/brand';
const router = Router();

router.get('/', getBrands);

export default router;
