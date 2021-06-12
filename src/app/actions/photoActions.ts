import { Dispatch } from "redux";
import API from "../../assets/API/API";

import * as actionTypes from './actionTypes/photoTypes';
import IPhoto from "../../interfaces/IPhoto";

export const getPhotos = (): Promise<IPhoto> => (async (dispatch: Dispatch) => {
    const response = await API.photo.fetchAll();
    const photosList = await response.json();
    dispatch({
        type: actionTypes.GET_PHOTOS,
        photosList
    });
}) as any; 