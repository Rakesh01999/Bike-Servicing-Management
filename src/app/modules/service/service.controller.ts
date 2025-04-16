import { Request, Response } from 'express';
import { ServiceService } from './service.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IServiceComplete } from './service.interface';

const createService = catchAsync(async (req: Request, res: Response) => {
  const serviceData = req.body;
  const result = await ServiceService.createService(serviceData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllServices();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service records fetched successfully',
    data: result,
  });
});

const getServiceById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ServiceService.getServiceById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});

const completeService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const completionData: IServiceComplete = req.body;
  const result = await ServiceService.completeService(id, completionData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service marked as completed',
    data: result,
  });
});

const getOverdueServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getOverdueServices();
console.log('f-sc:',result)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
  completeService,
  getOverdueServices,
};