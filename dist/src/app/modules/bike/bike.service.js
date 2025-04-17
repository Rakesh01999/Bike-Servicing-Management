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
exports.BikeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if customer exists
    const customer = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: data.customerId,
        },
    });
    if (!customer) {
        throw new ApiError_1.default(404, 'Customer not found');
    }
    const result = yield prisma_1.default.bike.create({
        data,
    });
    return result;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findMany();
    return result;
});
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(404, 'Bike not found');
    }
    return result;
});
const updateBike = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if bike exists
    const bike = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!bike) {
        throw new ApiError_1.default(404, 'Bike not found');
    }
    // If customerId is provided, check if customer exists
    if (payload.customerId) {
        const customer = yield prisma_1.default.customer.findUnique({
            where: {
                customerId: payload.customerId,
            },
        });
        if (!customer) {
            throw new ApiError_1.default(404, 'Customer not found');
        }
    }
    const result = yield prisma_1.default.bike.update({
        where: {
            bikeId: id,
        },
        data: payload,
    });
    return result;
});
const deleteBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if bike exists
    const bike = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!bike) {
        throw new ApiError_1.default(404, 'Bike not found');
    }
    const result = yield prisma_1.default.bike.delete({
        where: {
            bikeId: id,
        },
    });
    return result;
});
exports.BikeService = {
    createBike,
    getAllBikes,
    getBikeById,
    updateBike,
    deleteBike,
};
