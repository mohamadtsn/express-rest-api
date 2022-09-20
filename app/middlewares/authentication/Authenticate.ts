import {RequestHandler} from "express-serve-static-core"
import * as jwtService from '../../services/token/jwt'

export default ((req, res, next) => {
	if (!req.headers['authorization']) {
		return res.status(401).send({
			statusCode: 401,
			success: false,
			message: 'You are not authorized!'
		})
	}

	const [, tokenValue] = req.headers.authorization.split(' ')
	const tokenPayload = jwtService.verify(tokenValue)
	if (!tokenPayload) {
		return res.status(401).send({
			statusCode: 401,
			success: false,
			message: 'Your Token is invalid!'
		})
	}

	next()
}) as RequestHandler
