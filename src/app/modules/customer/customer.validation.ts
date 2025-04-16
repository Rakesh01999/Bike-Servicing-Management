import { z } from 'zod';

const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    phone: z.string({
      required_error: 'Phone is required',
    }),
  }),
});

const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
  }),
});

export const CustomerValidation = {
  createCustomerZodSchema,
  updateCustomerZodSchema,
};