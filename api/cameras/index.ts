import { Router } from 'express';
import CameraController from '../../controllers/cameras.controllers';
import validationCamera from '../../middlewares/cameras.middleware';

const router = Router();

const cameraController = new CameraController();

router.get('/cameras', cameraController.getAll);
router.post('/cameras', validationCamera, cameraController.create);

export default router;