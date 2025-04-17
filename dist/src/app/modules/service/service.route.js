"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
// Create a new service record
router.post('/', (0, validateRequest_1.default)(service_validation_1.ServiceValidation.createServiceZodSchema), service_controller_1.ServiceController.createService);
// Get all service records
router.get('/', service_controller_1.ServiceController.getAllServices);
// Get overdue services
// router.get('/status/overdue', ServiceController.getOverdueServices);
router.get('/status', service_controller_1.ServiceController.getOverdueServices);
// Get a specific service record by ID
router.get('/:id', service_controller_1.ServiceController.getServiceById);
// Complete a service
router.put('/:id/complete', (0, validateRequest_1.default)(service_validation_1.ServiceValidation.completeServiceZodSchema), service_controller_1.ServiceController.completeService);
exports.ServiceRoutes = router;
