import {NextFunction, Request, Response} from "express";
import UserModel from '../models/User';
import * as bcrypt from '../services/hash/bcrypt';
import {UserControllerInstance} from "../interfaces/controllers/UserInterface";
import Controller from "./Controller";

class UserController extends Controller implements UserControllerInstance {

    public async userList(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const Users = await UserModel.find({}, {password: 0, __v: 0, created_at: 0, updated_at: 0})
            res.send({
                status: 200,
                data: Users
            })
        } catch (e) {
            next(e)
        }
    }
}

export default UserController
