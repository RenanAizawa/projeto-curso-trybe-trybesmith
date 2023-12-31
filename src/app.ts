import express from 'express';
import orderRoute from './routes/order.router';
import productRouter from './routes/product.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRoute);

export default app;
