"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceData = req.body;
    const result = yield service_service_1.ServiceService.createService(serviceData);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Service record created successfully',
        data: result,
    });
}));
const getAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceService.getAllServices();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Service records fetched successfully',
        data: result,
    });
}));
const getServiceById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.ServiceService.getServiceById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Service record fetched successfully',
        data: result,
    });
}));
const completeService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const completionData = req.body;
    const result = yield service_service_1.ServiceService.completeService(id, completionData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Service marked as completed',
        data: result,
    });
}));
const getOverdueServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceService.getOverdueServices();
    console.log('f-sc:', result);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result,
    });
}));
exports.ServiceController = {
    createService,
    getAllServices,
    getServiceById,
    completeService,
    getOverdueServices,
};
