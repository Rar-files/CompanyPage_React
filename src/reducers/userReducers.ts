import IUser, {emptyUser} from '../interfaces/IUser';
import * as actionTypes from "../app/actions/actionTypes/userTypes";

export interface IUsersReducer {
    usersList: IUser[];
    user: IUser;
}

const initialState = (): IUsersReducer => ({
    usersList: [],
    user: emptyUser,
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

        case actionTypes.GET_USER: {
            const data: actionTypes.IUserTypes['GET_USER'] = action;

            return {
                ...state,
                user: data.user
            }
        }

        default: {
            return state;
        }
    }
}