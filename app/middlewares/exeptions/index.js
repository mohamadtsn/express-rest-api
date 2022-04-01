module.exports = (app) => {
	app.use((error, req, res, next) => {
		const status = error.status || 500
		res.send({
			title: `Server Error | ${status}`,
			status: status,
			message: error.message
		})
	})
}
