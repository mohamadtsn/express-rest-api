import mongo from 'mongoose'
import {env} from "../../helpers/globalFunctions";
import {exit} from "process";

mongo.connection.on('error', (err) => {
    console.error('mongodb error:', err)
    exit(1)
})

export default () => {
    mongo.connect(`mongodb://${env('MONGO_HOST')}:${env('MONGO_PORT')}`, {
        dbName: env('MONGO_DB_NAME') ?? 'semi-app'
    })
}
