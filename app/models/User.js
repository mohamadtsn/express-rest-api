const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	first_name: { type: String, default: null },
	last_name: { type: String, default: null },
	mobile: String,
	email: { type: String, default: null },
	password: String,
	national_code: { type: String, minLength: 10, maxLength: 10, default: null },
	created_at: { type: Date, default: Date.now() },
	updated_at: { type: Date, default: Date.now() }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
