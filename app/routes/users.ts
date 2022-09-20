import express from 'express'
import UserController from '../controllers/UserController'
import {controller} from "../helpers/globalFunctions";
const router = express.Router()

router.get('/', controller(UserController, 'userList'))

export default router
