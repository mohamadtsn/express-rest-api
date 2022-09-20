import express from "express";
import {baseMiddlewares, customMiddlewares} from "./middlewares";
import routes from "./routes";
import serviceProvider from "./providers/ServiceProvider";
import {config} from "dotenv";

const app = express()

// Init Environment
config()

// Init Service Provider`s
serviceProvider(app)

// Init Base Middleware`s
baseMiddlewares(app)

// Init App Routers
routes(app)

// Init Custom Middleware`s
customMiddlewares(app)

export default (port: string | null) => {
	app.listen(port, () => {
		console.log(`application running on port ${port} | URL: http://localhost:${port}`)
	})
}
