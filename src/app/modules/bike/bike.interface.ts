export type IBike = {
  bikeId?: string;
  brand: string;
  model: string;
  year: number;
  customerId: string;
};

export type IBikeFilters = {
  searchTerm?: string;
  brand?: string;
  model?: string;
  year?: number;
  customerId?: string;
};