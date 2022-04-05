const bcrypt = require('bcrypt')

exports.hash = async (data) => {
	return await bcrypt.hash(data, 11).then((hash) => {
		return hash
	})
}

exports.verify = async (data, hash) => {
	return await bcrypt.compare(data, hash).then((hash) => {
		return hash
	})
}
