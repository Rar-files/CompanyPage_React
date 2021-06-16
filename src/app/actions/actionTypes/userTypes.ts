import IUser from '../../../interfaces/IUser';

export const GET_CURRENT_USER_ID = 'GET_CURRENT_USER_ID';
export const GET_USERS = 'GET_USERS';

export interface IUserTypes{
    GET_CURRENT_USER_ID: {
        userID: number;
    };

    GET_USERS: {
        usersList: IUser[];
    };
}