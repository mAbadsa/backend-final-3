import { Router } from 'express';
import {
  getLimitedEdition,
  getProducts,
  getHandpicked,
  getPopular,
  getNewArrivals,
  search,
  createProducts,
  getBrandProducts,
  getCategoryProducts,
} from '@controllers/product';
const router = Router();

router.get('/', getProducts);
router.post('/', createProducts);
router.get('/limited', getLimitedEdition);
router.get('/handpicked', getHandpicked);
router.get('/popular', getPopular);
router.get('/new', getNewArrivals);
router.get('/search', search);
router.get('/brands/:id', getBrandProducts);
router.get('/categories/:id', getCategoryProducts);

export default router;
