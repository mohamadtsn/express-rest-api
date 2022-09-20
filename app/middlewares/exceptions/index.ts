import {ErrorRequestHandler, Express} from "express";

export default (app: Express) => {
	return ((error, _req, res, next) => {
		const status = error.status || 500
		res.send({
			title: `Server Error | ${status}`,
			status: status,
			message: error.message
		}).status(status)
		return next
	}) as ErrorRequestHandler
}
