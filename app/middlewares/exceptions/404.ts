import {Express, NextFunction, Request, Response} from "express";

export default (app: Express) => {
	return (req: Request, res: Response, next: NextFunction) => {
		res.send({
			status: 404,
			title: 'Not Found',
			message: 'Requested resource Not could found!'
		}).status(400)
		return next
	}
}
