import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createP(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [dataInsert] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = dataInsert;
    return {
      id: insertId,
      ...product,
    };
  }

  public async getAllP(): Promise<Product[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as Product[];
  }
}