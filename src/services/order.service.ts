import Order from '../interfaces/Order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAllO();
    console.log('service', orders);
    
    return orders as Order[];
  };
}
