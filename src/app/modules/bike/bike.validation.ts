import { z } from 'zod';

const createBikeZodSchema = z.object({
  body: z.object({
    brand: z.string({
      required_error: 'Brand is required',
    }),
    model: z.string({
      required_error: 'Model is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    customerId: z.string({
      required_error: 'Customer ID is required',
    }),
  }),
});

const updateBikeZodSchema = z.object({
  body: z.object({
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z.number().optional(),
    customerId: z.string().optional(),
  }),
});

export const BikeValidation = {
  createBikeZodSchema,
  updateBikeZodSchema,
};