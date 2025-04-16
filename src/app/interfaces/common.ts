// import { UserRole } from "@prisma/client";

// export type IAuthUser = {
//     email: string;
//     role: UserRole
// } | null;


export type IGenericResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};

export type IGenericErrorResponse = {
    success: boolean;
    status: number;
    message: string;
    stack?: string;
};