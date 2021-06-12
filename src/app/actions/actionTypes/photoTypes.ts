import IPhoto from "../../../interfaces/IPhoto";

export const GET_PHOTOS = 'GET_PHOTO';

export interface IPhotoTypes{
    GET_PHOTOS: {
        photosList: IPhoto[];
    }
}