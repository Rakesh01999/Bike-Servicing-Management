import express from 'express';
// import { userRoutes } from '../modules/User/user.routes';
// import { AdminRoutes } from '../modules/Admin/admin.routes';
// import { AuthRoutes } from '../modules/Auth/auth.routes';
// import { ReviewRoutes } from '../modules/Review/review.routes';
// import { MetaRoutes } from '../modules/Meta/meta.routes';
import { CustomerRoutes } from '../modules/customer/customer.route';
import { BikeRoutes } from '../modules/bike/bike.route';
import { ServiceRoutes } from '../modules/service/service.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/customers',
        route: CustomerRoutes
    },
    {
        path: '/bikes',
        route: BikeRoutes
    },
    {
        path: '/services',
        route: ServiceRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;