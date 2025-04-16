export type IPaginationOptions = {
    page?: number;
    limit?: number;
    sortBy?: string | undefined;
    sortOrder?: string | undefined;
}

export type IGenericPaginatedResponse<T> = {
    meta: {
        page: number;
        limit: number;
        total: number;
    };
    data: T;
};