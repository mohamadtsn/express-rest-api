import {NextFunction, Request, Response} from "express";

export interface UserControllerInstance {
    userList(req: Request, res: Response, next: NextFunction): Promise<Response | void>
}
