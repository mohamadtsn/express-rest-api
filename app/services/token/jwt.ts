import jwt from 'jsonwebtoken'
import {env} from '../../helpers/globalFunctions'

export function sign(data: string | object) {
    return jwt.sign(data, env('APP_SECRET') ?? 'test')
}

export function verify(data: string) {
    try {
        return jwt.verify(data, env('APP_SECRET') ?? 'test')
    } catch (e) {
        return false
    }
}
