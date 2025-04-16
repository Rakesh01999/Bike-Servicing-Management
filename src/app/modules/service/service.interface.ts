export type IService = {
  serviceId?: string;
  bikeId: string;
  serviceDate: Date;
  completionDate?: Date | null;
  description: string;
  status: 'pending' | 'in-progress' | 'done';
};

export type IServiceFilters = {
  searchTerm?: string;
  bikeId?: string;
  status?: 'pending' | 'in-progress' | 'done';
};

export type IServiceComplete = {
  completionDate?: Date | string;
};