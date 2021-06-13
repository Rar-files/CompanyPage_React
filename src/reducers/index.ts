import { combineReducers } from "redux";

import users, {IUserReducers} from './userReducers';
import photos, { IPhotoReducers } from "./photoReducers";
import posts, { IPostReducers } from "./postReducers";

export default combineReducers({
    users,
    posts,
    photos
})

export interface IState{
    users: IUserReducers;
    photos: IPhotoReducers;
    posts: IPostReducers;
}