import mysql from 'mysql2/promise';
import { env } from 'process';
import dotenv from 'dotenv';
import { PoolOptions } from 'mysql2/typings/mysql';

dotenv.config();

export default mysql.createPool(env.DATABASE_URL as PoolOptions);