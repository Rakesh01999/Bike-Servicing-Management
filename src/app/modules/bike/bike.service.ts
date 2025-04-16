import { Bike } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IBike } from './bike.interface';
import ApiError from '../../errors/ApiError';

const createBike = async (data: IBike): Promise<Bike> => {
  // Check if customer exists
  const customer = await prisma.customer.findUnique({
    where: {
      customerId: data.customerId,
    },
  });
  
  if (!customer) {
    throw new ApiError(404, 'Customer not found');
  }
  
  const result = await prisma.bike.create({
    data,
  });
  
  return result;
};

const getAllBikes = async (): Promise<Bike[]> => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeById = async (id: string): Promise<Bike | null> => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  
  if (!result) {
    throw new ApiError(404, 'Bike not found');
  }
  
  return result;
};

const updateBike = async (
  id: string,
  payload: Partial<IBike>
): Promise<Bike> => {
  // Check if bike exists
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  
  if (!bike) {
    throw new ApiError(404, 'Bike not found');
  }
  
  // If customerId is provided, check if customer exists
  if (payload.customerId) {
    const customer = await prisma.customer.findUnique({
      where: {
        customerId: payload.customerId,
      },
    });
    
    if (!customer) {
      throw new ApiError(404, 'Customer not found');
    }
  }
  
  const result = await prisma.bike.update({
    where: {
      bikeId: id,
    },
    data: payload,
  });
  
  return result;
};

const deleteBike = async (id: string): Promise<Bike> => {
  // Check if bike exists
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  
  if (!bike) {
    throw new ApiError(404, 'Bike not found');
  }
  
  const result = await prisma.bike.delete({
    where: {
      bikeId: id,
    },
  });
  
  return result;
};

export const BikeService = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};