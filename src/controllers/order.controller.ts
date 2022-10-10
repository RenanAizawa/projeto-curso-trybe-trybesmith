import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const data = await this.orderService.getAll();
    return res.status(200).json(data);
  };
}