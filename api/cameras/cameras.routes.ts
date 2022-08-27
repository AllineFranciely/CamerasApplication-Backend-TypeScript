import { Router } from 'express';
import CameraController from '.';
import validationCamera from './cameras.middleware';

const router = Router();

const cameraController = new CameraController();

router.get('/cameras', cameraController.getAll);
router.post('/cameras', validationCamera, cameraController.create);

export default router;