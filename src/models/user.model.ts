import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createU(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [dataInsert] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = dataInsert;
    return {
      id: insertId,
      ...user,
    };
  }
}