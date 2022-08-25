import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CameraService from '../services/cameras.services';

class CameraController {
  constructor(private cameraService = new CameraService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const cameras = await this.cameraService.getAll();
    res.status(StatusCodes.OK).json(cameras);
  };

  public create = async (req: Request, res: Response) => {
    const camera = req.body;

    const cameraCreated = await this.cameraService.create(camera);
    res.status(StatusCodes.CREATED).json(cameraCreated);
  };
}

export default CameraController;