import { combineReducers } from "redux";

import users, {IUserReducers} from './userReducers';
import photo, { IPhotoReducers } from "./photoReducers";

export default combineReducers({
    users,
    photo
})

export interface IState{
    users: IUserReducers;
    photo: IPhotoReducers
}