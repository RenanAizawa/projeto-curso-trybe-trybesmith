import dotnev from 'dotenv';
import mysql from 'mysql2/promise';

dotnev.config();

export default mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
});