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
import { ProductsByIdQueryDto } from '@/dtos/products.dto';
import { validationMiddleware } from '@/middlewares';
const router = Router();

router.get('/', getProducts);
router.post('/', createProducts);

router.put(
  '/:id',
  validationMiddleware(ProductsByIdQueryDto, 'params'),
  updateProducts
);
router.delete(
  '/:id',
  validationMiddleware(ProductsByIdQueryDto, 'params'),
  deleteProducts
);

router.get('/limited', getLimitedEdition);
router.get('/handpicked', getHandpicked);
router.get('/popular', getPopular);
router.get('/new', getNewArrivals);
router.get('/search', search);
router.get(
  '/brands/:id',
  validationMiddleware(ProductsByIdQueryDto, 'params'),
  getBrandProducts
);
router.get(
  '/categories/:id',
  validationMiddleware(ProductsByIdQueryDto, 'params'),
  getCategoryProducts
);
router.get(
  '/:id',
  validationMiddleware(ProductsByIdQueryDto, 'params'),
  getProductById
);

export default router;
