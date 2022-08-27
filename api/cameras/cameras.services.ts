import connection from './connection';
import CameraModel from './cameras.model';
import Camera from '../../interfaces/Camera.interface';

class CameraService {
  public model: CameraModel;

  constructor() {
    this.model = new CameraModel(connection);
  }

  public async getAll(): Promise<Camera[]> {
    const cameras = await this.model.getAll();
    return cameras;
  }

  public create(camera: Camera): Promise<Camera> {
    return this.model.create(camera);
  }
}

export default CameraService;