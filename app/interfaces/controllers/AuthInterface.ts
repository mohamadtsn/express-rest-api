import {NextFunction, Request, Response} from "express";

export interface AuthControllerInstance {
    login(req: Request, res: Response, next: NextFunction): Promise<Response | void>
    register(req: Request, res: Response, next: NextFunction): Promise<Response | void>
}
