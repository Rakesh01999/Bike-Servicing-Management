import { Customer } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICustomer, ICustomerFilters } from './customer.interface';
import ApiError from '../../errors/ApiError';

const createCustomer = async (data: ICustomer): Promise<Customer> => {
  // Check if email already exists
  const existingEmail = await prisma.customer.findUnique({
    where: {
      email: data.email,
    },
  });
  
  if (existingEmail) {
    throw new ApiError(400, 'Email already exists');
  }
  
  const result = await prisma.customer.create({
    data,
  });
  
  return result;
};

const getAllCustomers = async (): Promise<Customer[]> => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomerById = async (id: string): Promise<Customer | null> => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  
  if (!result) {
    throw new ApiError(404, 'Customer not found');
  }
  
  return result;
};

const updateCustomer = async (
  id: string,
  payload: Partial<ICustomer>
): Promise<Customer> => {
  // Check if customer exists
  const customer = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  
  if (!customer) {
    throw new ApiError(404, 'Customer not found');
  }
  
  // Check if email already exists with another customer
  if (payload.email && payload.email !== customer.email) {
    const existingEmail = await prisma.customer.findUnique({
      where: {
        email: payload.email,
      },
    });
    
    if (existingEmail) {
      throw new ApiError(400, 'Email already exists');
    }
  }
  
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  
  return result;
};

const deleteCustomer = async (id: string): Promise<Customer> => {
  // Check if customer exists
  const customer = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  
  if (!customer) {
    throw new ApiError(404, 'Customer not found');
  }
  
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  
  return result;
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};