import { Request, Response } from 'express';
import { BikeService } from './bike.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBike } from './bike.interface';

const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.createBike(req.body);

  sendResponse<IBike>(res, {
    statusCode: 201,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllBikes();

  sendResponse<IBike[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Bikes fetched successfully',
    data: result,
  });
});

const getBikeById = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getBikeById(req.params.id);

  sendResponse<IBike>(res, {
    statusCode: 200,
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});

const updateBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.updateBike(req.params.id, req.body);

  sendResponse<IBike>(res, {
    statusCode: 200,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});

const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.deleteBike(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};