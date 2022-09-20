import {Express} from "express";
import middlewareGroups from './middlewareGroups';
import {MiddlewareGroupsInstance} from "../interfaces/middlewares/middleware.groups";

export const baseMiddlewares = (app: Express) => {
	middlewareGroups.forEach((middlewareInstance: MiddlewareGroupsInstance) => {
		if (middlewareInstance.type === 'base') {
			initializeBaseMiddlewares(app, middlewareInstance.middlewares)
		}
	})
}

export const customMiddlewares = (app: Express) => {
	middlewareGroups.forEach((middlewareInstance: MiddlewareGroupsInstance) => {
		if (middlewareInstance.type === 'custom') {
			initializeCustomMiddlewares(app, middlewareInstance.middlewares)
		}
	})
}

function initializeBaseMiddlewares(app: Express, middlewares: Array<Function>) {
	middlewares.forEach((middleware) => {
		app.use(middleware())
	})
}

function initializeCustomMiddlewares(app: Express, middlewares: Array<Function>) {
	middlewares.forEach((middleware) => {
		app.use(middleware(app))
	})
}
