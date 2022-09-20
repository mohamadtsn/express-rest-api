import {NextFunction, Request, Response} from "express";
import Controller from "./Controller";

class HomeController extends Controller {

    public async index(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            res.send({
                status: 200,
                message: 'Welcome to Application!!',
                data: {}
            })
        } catch (e) {
            next(e)
        }
    }
}

export default HomeController
