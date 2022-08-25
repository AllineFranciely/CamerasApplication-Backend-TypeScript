import { Pool, ResultSetHeader } from 'mysql2/promise';
import Camera from '../interfaces/Camera.interface';

export default class CameraModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Camera[]> {
    const result = await this.connection
      .execute('SELECT * FROM cameras');
    const [rows] = result;
    return rows as Camera[];
  }

  public async create(camera: Camera): Promise<Camera> {
    const { nome, fabricante, serie } = camera;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO cameras (nome, fabricante, serie) VALUES (?, ?, ?)',
      [nome, fabricante, serie],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...camera };
  }
}