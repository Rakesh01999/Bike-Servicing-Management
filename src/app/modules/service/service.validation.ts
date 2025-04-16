import { z } from 'zod';
import { serviceStatus } from './service.constant';

const createServiceZodSchema = z.object({
  body: z.object({
    bikeId: z.string({
      required_error: 'Bike ID is required',
    }),
    serviceDate: z.string({
      required_error: 'Service date is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    status: z.enum([...serviceStatus] as [string, ...string[]], {
      required_error: 'Status is required',
    }),
  }),
});

const updateServiceZodSchema = z.object({
  body: z.object({
    bikeId: z.string().optional(),
    serviceDate: z.string().optional(),
    completionDate: z.string().optional(),
    description: z.string().optional(),
    status: z.enum([...serviceStatus] as [string, ...string[]]).optional(),
  }),
});

const completeServiceZodSchema = z.object({
  body: z.object({
    completionDate: z.string().optional(),
  }),
});

export const ServiceValidation = {
  createServiceZodSchema,
  updateServiceZodSchema,
  completeServiceZodSchema,
};