const UserModel = require('../models/User')
const bcrypt = require('../services/hash/bcrypt')

class UserController {
	static async userList (req, res, next) {
		const Users = await UserModel.find({})
		res.send({
			status: 200,
			message: 'Users List...!',
			data: Users
		})
	}

	static async addUser (req, res, next) {
		try {
			// eslint-disable-next-line camelcase
			const { first_name, last_name, mobile, password } = req.body
			const CreateUser = new UserModel({
				first_name,
				last_name,
				mobile,
				password: bcrypt.hash(password)
			})
			await CreateUser.save()
			res.status(201).send({
				title: 'create user successfully!',
				statusCode: 201,
				userId: CreateUser._id
			})
		} catch (e) {
			next(e)
		}
	}
}

module.exports = UserController
