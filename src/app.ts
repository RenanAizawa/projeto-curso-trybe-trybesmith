import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.get('/', (_req: Request, res: Response) => res
  .status(200).json({ message: 'asplicação funcionando' }));

export default app;
