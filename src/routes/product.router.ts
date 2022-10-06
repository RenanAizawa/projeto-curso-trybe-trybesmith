import express from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post('/', productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;