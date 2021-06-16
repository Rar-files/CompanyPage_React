import { Dispatch } from "redux";
import API from "../../assets/API/API";

import * as actionTypes from './actionTypes/userTypes';
import IUser from "../../interfaces/IUser";

export const getUsers = (): Promise<IUser[]> => (async (dispatch: Dispatch) => {
    const response = await API.user.fetchAll();
    const usersList = await response.json();
    dispatch({
        type: actionTypes.GET_USERS,
        usersList
    });
}) as any;

export const getCurrentUserID = (userID: number): Promise<IUser> => ((dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.GET_CURRENT_USER_ID,
        userID
    });
}) as any;