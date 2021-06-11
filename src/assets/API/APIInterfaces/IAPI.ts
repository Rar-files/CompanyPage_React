import IUserAPI from './IUserAPI';
import IPhotoAPI from './IPhotoAPI';
import IPostsAPI from './IPostsAPI';

interface IAPI{
    user: IUserAPI;
    photo: IPhotoAPI;
    posts: IPostsAPI;
}

export default IAPI;