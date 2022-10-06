import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productDone = await this.productService.create(product);

    return res.status(201).json(productDone);
  };
}

export default ProductController;