import {Response} from "express";

class Controller {
    public responseJson(data: object, response: Response, status: number = 200) {
        response.json(data).status(status)
    }
}

export default Controller
