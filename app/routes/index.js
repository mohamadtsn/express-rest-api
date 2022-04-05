const UserRouter = require('./users')
const AuthenticateMiddleware = require('../middlewares/authentication/Authenticate')

module.exports = (app) => {
	app.use('/api/v1/users', [AuthenticateMiddleware], UserRouter)
}
