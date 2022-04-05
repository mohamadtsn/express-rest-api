const jwtService = require('../../services/token/jwt')

module.exports = (req, res, next) => {
	if (!('authorization' in req.headers)) {
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
}
