const mongo = require('mongoose')

mongo.connection.on('error', (err) => {
	console.log('mongodb error:', err)
})
const MongoDB = () => {
	mongo.connect(`mongodb://${env('MONGO_HOST')}:${env('MONGO_PORT')}`, {
		dbName: env('MONGO_DB_NAME')
	})
}
module.exports = MongoDB
