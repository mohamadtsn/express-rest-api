const express = require('express')
const app = express()

require('./middlewares')(app)
require('./routes')(app)

require('./middlewares/exeptions')(app)
require('./middlewares/exeptions/404')(app)

module.exports = (port) => {
	app.listen(port, () => {
		console.log(`app runing on port ${port}`)
	})
}
