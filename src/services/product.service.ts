import Product from '../interfaces/Product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.createP(product);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAllP();
    return products as Product[];
  }
}

export default ProductService;