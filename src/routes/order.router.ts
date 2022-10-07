import express from 'express';
import OrderController from '../controllers/order.controller';

const orderRoute = express.Router();
const orderController = new OrderController();

orderRoute.get('/', orderController.getAll);

export default orderRoute;