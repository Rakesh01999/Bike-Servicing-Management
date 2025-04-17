"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidation = void 0;
const zod_1 = require("zod");
const createCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email('Invalid email format'),
        phone: zod_1.z.string({
            required_error: 'Phone is required',
        }),
    }),
});
const updateCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email('Invalid email format').optional(),
        phone: zod_1.z.string().optional(),
    }),
});
exports.CustomerValidation = {
    createCustomerZodSchema,
    updateCustomerZodSchema,
};
