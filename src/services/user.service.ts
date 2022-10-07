import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../interfaces/User.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

dotenv.config();

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const payload = await this.model.createU(user);
    const secret = process.env.JWT_SECRET as string;
    
    const token = jwt.sign(payload, secret);

    return token;
  }
}

export default UserService;