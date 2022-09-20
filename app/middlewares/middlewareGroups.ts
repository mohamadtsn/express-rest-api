import exception404Middleware from './exceptions/404';
import mainExceptionMiddleware from './exceptions';
import bodyParser from "body-parser";
import cors from "cors";
import {MiddlewareGroupsInstance} from "../interfaces/middlewares/middleware.groups";

const MiddlewareGroups: Array<MiddlewareGroupsInstance> = [
    // Base Middlewares
    {
        type: 'base',
        middlewares: [
            bodyParser.json,
            cors,
        ]
    },

    // Custom Middlewares
    {
        type: 'custom',
        middlewares: [
            // Exceptions
            mainExceptionMiddleware,
            exception404Middleware
        ]
    },
]

export default MiddlewareGroups
