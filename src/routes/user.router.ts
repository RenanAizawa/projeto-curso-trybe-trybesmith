import express from 'express';
import UserController from '../controllers/user.controller';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/', userController.create);

export default userRouter;