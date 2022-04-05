const jwt = require('jsonwebtoken')

exports.sign = (data) => {
	return jwt.sign(data, env('APP_SECRET'))
}

exports.verify = (data) => {
	try {
		return jwt.verify(data, env('APP_SECRET'))
	} catch (e) {
		return false
	}
}
