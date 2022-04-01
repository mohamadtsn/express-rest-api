module.exports = class UserController {
	static userList (req, res, next) {
		res.send({
			title: 'test response',
			message: 'Hello World...!'
		})
	}
}
