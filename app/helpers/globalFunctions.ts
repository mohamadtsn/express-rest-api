import Controller from "../controllers/Controller";
import {exit} from "process";

export function env(key: string, defaultValue: string | null = null): string | null {
    return process.env[key] || defaultValue
}

export function dd(...data: any[]): void {
    console.info(data)
    exit(1)
}

export function controller(controller: new () => Controller | any, method: string): Controller | any {
    const instance = new controller()
    if (typeof instance[method] === 'function') {
        return instance[method].bind(instance)
    }
    return null;
}
