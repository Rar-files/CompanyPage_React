import IUser from '../../../interfaces/IUser';

export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';

export interface IUserTypes{
    GET_USER: {
        user: IUser;
    };

    GET_USERS: {
        usersList: IUser[];
    };
}