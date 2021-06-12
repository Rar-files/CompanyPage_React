import IPhoto, { emptyPhoto } from "../interfaces/IPhoto";
import * as actionTypes from '../app/actions/actionTypes/photoTypes';

export interface IPhotoReducers {
    photosList: IPhoto[];
}

const initialState = () : IPhotoReducers => ({
    photosList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action: any) => {
    switch(action.type){

        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;

            return{
                ...state,
                photo: data.photosList
            }
        }

        default: {
            return state;
        }
    }
}