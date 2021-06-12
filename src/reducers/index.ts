import { combineReducers } from "redux";

import users, {IUsersReducer} from './userReducers';

export default combineReducers({
    users
})

export interface IState{
    users: IUsersReducer;
}