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
router
  .post('/', createProducts)
  .put('/:id', updateProducts)
  .delete('/:id', deleteProducts);
router.get('/limited', getLimitedEdition);
router.get('/handpicked', getHandpicked);
router.get('/popular', getPopular);
router.get('/new', getNewArrivals);
router.get('/search', search);
router.get('/brands/:id', getBrandProducts);
router.get('/categories/:id', getCategoryProducts);
router.get('/:id', getProductById); //todo: need to validate ID

export default router;
