import Controller from "./Controller";
import {AuthControllerInstance} from "../interfaces/controllers/AuthInterface";
import {NextFunction, Request, Response} from "express";
import UserModel from '../models/User';
import * as bcrypt from '../services/hash/bcrypt';
import * as jwtService from '../services/token/jwt';

class AuthController extends Controller implements AuthControllerInstance {
    public async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {mobile, password} = req.body
            const user = await UserModel.findOne({
                mobile
            }).limit(1)
            if (!user || !bcrypt.verify(password, user.password)) {
                return res.status(404).send({
                    statusCode: 404,
                    success: false,
                    message: 'Invalid mobile or password!'
                })
            }

            return res.status(200).send({
                statusCode: 200,
                success: true,
                message: 'login successful!',
                token: jwtService.sign({id: user._id})
            })
        } catch (e) {
            return next(e)
        }
    }

    public async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const {first_name, last_name, mobile, password} = req.body
            const createUser = new UserModel({
                first_name,
                last_name,
                mobile,
                password: bcrypt.hash(password),
            })
            await createUser.save()
            return this.responseJson({
                title: 'create user successfully!',
                statusCode: 201,
                token: jwtService.sign({id: createUser._id})
            }, res, 201)
        } catch (e) {
            next(e)
        }
    }
}

export default AuthController
