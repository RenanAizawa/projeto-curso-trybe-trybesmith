import Order from '../interfaces/Order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAllO();
    console.log('service', orders);
    
    return orders as Order[];
  }
}

export default OrderService;