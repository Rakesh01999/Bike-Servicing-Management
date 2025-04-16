import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';

const router = express.Router();

// Create a new service record
router.post(
  '/',
  validateRequest(ServiceValidation.createServiceZodSchema),
  ServiceController.createService
);

// Get all service records
router.get('/', ServiceController.getAllServices);


// Get overdue services
// router.get('/status/overdue', ServiceController.getOverdueServices);
router.get('/status', ServiceController.getOverdueServices);


// Get a specific service record by ID
router.get('/:id', ServiceController.getServiceById);

// Complete a service
router.put(
  '/:id/complete',
  validateRequest(ServiceValidation.completeServiceZodSchema),
  ServiceController.completeService
);


export const ServiceRoutes = router;