import { Request, Response } from 'express';
import { CustomerService } from './customer.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICustomer } from './customer.interface';

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomer(req.body);

  sendResponse<ICustomer>(res, {
    statusCode: 201,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomers();

  sendResponse<ICustomer[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});

const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getCustomerById(req.params.id);

  sendResponse<ICustomer>(res, {
    statusCode: 200,
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.updateCustomer(req.params.id, req.body);

  sendResponse<ICustomer>(res, {
    statusCode: 200,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.deleteCustomer(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Customer deleted successfully',
    data: result,
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};