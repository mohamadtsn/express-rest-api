import application from "./app/index"
import {env} from "./app/helpers/globalFunctions"


// Start Application
application(env('APP_PORT', '3000'))
