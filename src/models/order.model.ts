import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAllO = async (): Promise<Order[]> => {
    const [data] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders o
    INNER JOIN Trybesmith.Products p ON o.id = p.orderId GROUP BY o.id ORDER BY o.id;`,
    );
    console.log('model', data);
    
    return data as Order[];
  };
}