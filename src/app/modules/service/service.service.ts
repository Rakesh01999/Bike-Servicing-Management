import { ServiceRecord } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IService, IServiceComplete } from './service.interface';
import ApiError from '../../errors/ApiError';

const createService = async (data: IService): Promise<ServiceRecord> => {
  // Check if bike exists
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: data.bikeId,
    },
  });
  
  if (!bike) {
    throw new ApiError(404, 'Bike not found');
  }
  
  const result = await prisma.serviceRecord.create({
    data: {
      bikeId: data.bikeId,
      serviceDate: new Date(data.serviceDate),
      description: data.description,
      status: data.status,
    },
  });
  
  return result;
};

const getAllServices = async (): Promise<ServiceRecord[]> => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getServiceById = async (id: string): Promise<ServiceRecord | null> => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  
  if (!result) {
    throw new ApiError(404, 'Service record not found');
  }
  
  return result;
};

const completeService = async (
  id: string,
  data: IServiceComplete
): Promise<ServiceRecord> => {
  // Check if service exists
  const service = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  
  if (!service) {
    throw new ApiError(404, 'Service record not found');
  }
  
  const completionDate = data.completionDate ? new Date(data.completionDate) : new Date();
  
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate,
      status: 'done',
    },
  });
  
  return result;
};

const getOverdueServices = async (): Promise<ServiceRecord[]> => {
  // Calculate date 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ['pending', 'in-progress'],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
  
  return result;
};

export const ServiceService = {
  createService,
  getAllServices,
  getServiceById,
  completeService,
  getOverdueServices,
};