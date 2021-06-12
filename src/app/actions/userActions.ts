import { Dispatch } from "redux";
import * as actionTypes from './actionTypes/userTypes';
import IUser from "../../interfaces/IUser";
import API from "../../assets/API/API";

export const getUsers = (): Promise<IUser[]> => (async (dispatch: Dispatch) => {

    const response = await API.user.fetchAll();
    const usersList = await response.json();
    dispatch({
        type: actionTypes.GET_USERS,
        usersList
    });
}) as any;

export const getUserByID = (ID: number): Promise<IUser> => (async (dispatch: Dispatch) => {

    const response = await API.user.fetchByID(ID);
    const user = await response.json();
    dispatch({
        type: actionTypes.GET_USER,
        user
    });
}) as any;