module.exports = (app) => {
	app.use((req, res, next) => {
		res.send({
			status: 404,
			title: 'Not Found',
			message: 'Requested resource Not could found!'
		})
	})
}
