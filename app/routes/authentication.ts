import {Router} from 'express'
import {controller} from "../helpers/globalFunctions";
import AuthController from "../controllers/AuthController";

const router = Router()

router.post('/login', controller(AuthController, 'login'))
router.post('/register', controller(AuthController, 'register'))

export default router
