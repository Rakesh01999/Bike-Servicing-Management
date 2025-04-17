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
exports.CustomerService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if email already exists
    const existingEmail = yield prisma_1.default.customer.findUnique({
        where: {
            email: data.email,
        },
    });
    if (existingEmail) {
        throw new ApiError_1.default(400, 'Email already exists');
    }
    const result = yield prisma_1.default.customer.create({
        data,
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!result) {
        throw new ApiError_1.default(404, 'Customer not found');
    }
    return result;
});
const updateCustomer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if customer exists
    const customer = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!customer) {
        throw new ApiError_1.default(404, 'Customer not found');
    }
    // Check if email already exists with another customer
    if (payload.email && payload.email !== customer.email) {
        const existingEmail = yield prisma_1.default.customer.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (existingEmail) {
            throw new ApiError_1.default(400, 'Email already exists');
        }
    }
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if customer exists
    const customer = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!customer) {
        throw new ApiError_1.default(404, 'Customer not found');
    }
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.CustomerService = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
