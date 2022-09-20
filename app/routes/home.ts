import {Router} from 'express'
import {controller} from "../helpers/globalFunctions";
import HomeController from "../controllers/HomeController";

const router = Router()

router.get('/', controller(HomeController, 'index'))

export default router
