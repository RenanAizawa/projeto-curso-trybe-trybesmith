import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createP(product: Product): Promise<Product> {
    const { name, amount, orderId } = product;
    const [dataInsert] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?, ?, ?)',
      [name, amount, orderId],
    );
    const { insertId } = dataInsert;
    return {
      id: insertId,
      ...product,
    };
  }
}