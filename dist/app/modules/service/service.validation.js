"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const service_constant_1 = require("./service.constant");
const createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({
            required_error: 'Bike ID is required',
        }),
        serviceDate: zod_1.z.string({
            required_error: 'Service date is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        status: zod_1.z.enum([...service_constant_1.serviceStatus], {
            required_error: 'Status is required',
        }),
    }),
});
const updateServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().optional(),
        serviceDate: zod_1.z.string().optional(),
        completionDate: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        status: zod_1.z.enum([...service_constant_1.serviceStatus]).optional(),
    }),
});
const completeServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().optional(),
    }),
});
exports.ServiceValidation = {
    createServiceZodSchema,
    updateServiceZodSchema,
    completeServiceZodSchema,
};
