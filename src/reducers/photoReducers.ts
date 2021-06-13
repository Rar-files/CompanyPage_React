import IPhoto, { emptyPhoto } from "../interfaces/IPhoto";
import * as actionTypes from '../app/actions/actionTypes/photoTypes';

export interface IPhotoReducers {
    photosList: IPhoto[];
    photo: IPhoto;
}

const initialState = () : IPhotoReducers => ({
    photosList: [],
    photo: emptyPhoto
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action: any) => {
    switch(action.type){

        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;

            return{
                ...state,
                photosList: data.photosList
            }
        }

        case actionTypes.GET_PHOTO: {
            const data: actionTypes.IPhotoTypes['GET_PHOTO'] = action;

            return{
                ...state,
                photo: data.photo
            }
        }

        default: {
            return state;
        }
    }
}