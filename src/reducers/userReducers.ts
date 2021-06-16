import IUser, {emptyUser} from '../interfaces/IUser';
import * as actionTypes from "../app/actions/actionTypes/userTypes";

export interface IUserReducers {
    usersList: IUser[];
    userID: number;
}

const initialState = (): IUserReducers => ({
    usersList: [],
    userID: 1,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action: any) => {
    switch (action.type){

        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;

            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.GET_CURRENT_USER_ID: {
            const data: actionTypes.IUserTypes['GET_CURRENT_USER_ID'] = action;

            return {
                ...state,
                user: data.userID
            }
        }

        default: {
            return state;
        }
    }
}