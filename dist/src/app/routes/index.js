"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { userRoutes } from '../modules/User/user.routes';
// import { AdminRoutes } from '../modules/Admin/admin.routes';
// import { AuthRoutes } from '../modules/Auth/auth.routes';
// import { ReviewRoutes } from '../modules/Review/review.routes';
// import { MetaRoutes } from '../modules/Meta/meta.routes';
const customer_route_1 = require("../modules/customer/customer.route");
const bike_route_1 = require("../modules/bike/bike.route");
const service_route_1 = require("../modules/service/service.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: customer_route_1.CustomerRoutes
    },
    {
        path: '/bikes',
        route: bike_route_1.BikeRoutes
    },
    {
        path: '/services',
        route: service_route_1.ServiceRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
