import express from 'express';
import { BikeController } from './bike.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BikeValidation } from './bike.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeZodSchema),
  BikeController.createBike
);

router.get('/', BikeController.getAllBikes);

router.get('/:id', BikeController.getBikeById);

router.put(
  '/:id',
  validateRequest(BikeValidation.updateBikeZodSchema),
  BikeController.updateBike
);

router.delete('/:id', BikeController.deleteBike);

export const BikeRoutes = router;