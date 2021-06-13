import IPhoto from "../../../interfaces/IPhoto";

export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotoTypes{
    GET_PHOTOS: {
        photosList: IPhoto[];
    }

    GET_PHOTO: {
        photo: IPhoto;
    }
}