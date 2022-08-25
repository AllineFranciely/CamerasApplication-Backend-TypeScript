import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Camera from '../interfaces/Camera.interface';

const properties = ['nome', 'fabricante', 'serie'];

function validateProperties(camera: Camera): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(camera, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(camera: Camera): [boolean, string | null] {
  const entries = Object.entries(camera);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationCamera(req: Request, res: Response, next: NextFunction) {
  const camera: Camera = req.body;

  let [valid, property] = validateProperties(camera);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(camera);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  next();
}

export default validationCamera;