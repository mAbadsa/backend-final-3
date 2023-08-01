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
  getProductById,
  updateProducts,
  deleteProducts,
} from '@controllers/product';
const router = Router();

router.get('/', getProducts);
router.post('/', createProducts);

router.get('/:id', getProductById); //todo: need to validate ID
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

router.get('/limited', getLimitedEdition);
router.get('/handpicked', getHandpicked);
router.get('/popular', getPopular);
router.get('/new', getNewArrivals);
router.get('/search', search);
router.get('/brands/:id', getBrandProducts); //todo: need to validate ID
router.get('/categories/:id', getCategoryProducts); //todo: need to validate ID

export default router;
