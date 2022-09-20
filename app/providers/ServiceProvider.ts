import {Express} from "express";
import mongo from '../services/database/mongo';

export default (app: Express) => {
	mongo()
}
