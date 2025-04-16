export type ICustomer = {
    customerId?: string;
    name: string;
    email: string;
    phone: string;
    createdAt?: Date;
  };
  
  export type ICustomerFilters = {
    searchTerm?: string;
    name?: string;
    email?: string;
    phone?: string;
  };