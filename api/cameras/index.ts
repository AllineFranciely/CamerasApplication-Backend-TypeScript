import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import CameraService from './cameras.services';

export class CameraController {
  constructor(private cameraService = new CameraService()) { }

  public getAll = async (req: Request, res: Response) => {
    const cameras = await this.cameraService.getAll();
    res.status(StatusCodes.OK).json(cameras);
  };

  public create = async (req: Request, res: Response) => {
    const camera = JSON.parse(req.body);
    console.log({camera});
    const cameraCreated = await this.cameraService.create(camera);
    console.log({cameraCreated});
    res.status(StatusCodes.CREATED).json(cameraCreated);
  };
}

export default new CameraController().getAll;