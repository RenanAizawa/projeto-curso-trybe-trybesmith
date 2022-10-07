import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllO(): Promise<Order[]> {
    const [data] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId, 
        json_arrayagg(Trybesmith.Products.id) AS productsIds 
        FROM Trybesmith.Orders 
        INNER JOIN Trybesmith.Products ON Trybesmith.Products.orderId = Trybesmith.Orders.id 
        GROUP BY Trybesmith.Orders.id`,
    );
    console.log('model', data);
    
    return data;
  }
}