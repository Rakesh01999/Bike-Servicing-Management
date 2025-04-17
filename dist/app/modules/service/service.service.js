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
exports.ServiceService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if bike exists
    const bike = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: data.bikeId,
        },
    });
    if (!bike) {
        throw new ApiError_1.default(404, 'Bike not found');
    }
    const result = yield prisma_1.default.serviceRecord.create({
        data: {
            bikeId: data.bikeId,
            serviceDate: new Date(data.serviceDate),
            description: data.description,
            status: data.status,
        },
    });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(404, 'Service record not found');
    }
    return result;
});
const completeService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if service exists
    const service = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!service) {
        throw new ApiError_1.default(404, 'Service record not found');
    }
    const completionDate = data.completionDate ? new Date(data.completionDate) : new Date();
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate,
            status: 'done',
        },
    });
    return result;
});
const getOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    // Calculate date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in-progress'],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.ServiceService = {
    createService,
    getAllServices,
    getServiceById,
    completeService,
    getOverdueServices,
};
