import {Schema, model} from 'mongoose'

const RawSchema = {
    first_name: {type: String, default: null},
    last_name: {type: String, default: null},
    mobile: String,
    email: {type: String, default: null},
    password: String,
    national_code: {type: String, minLength: 10, maxLength: 10, default: null},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
}

const UserSchema = new Schema(RawSchema)

const UserModel = model('User', UserSchema)

export default UserModel
