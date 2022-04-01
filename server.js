require('dotenv').config()
require('./app/helpers/globalFunctions')

const application = require('./app')

application(env('APP_PORT'))
