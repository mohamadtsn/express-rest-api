import express, {Express, Router} from "express";
import UserRouter from './users'
import AuthenticationRouter from './authentication'
import HomeRouter from './home'
import AuthenticateMiddleware from '../middlewares/authentication/Authenticate'
import path from "path";

export default (app: Express) => {
	const BaseRouter = Router()

	BaseRouter.use('/', HomeRouter)
	BaseRouter.use('/auth', AuthenticationRouter)
	BaseRouter.use('/users', [AuthenticateMiddleware], UserRouter)

	app.use('/v1/', BaseRouter)
	app.use('/', (req, res, next) => {
		res.redirect('/v1/')
	})
	app.use(express.static(path.join(__dirname, 'public')))
}
