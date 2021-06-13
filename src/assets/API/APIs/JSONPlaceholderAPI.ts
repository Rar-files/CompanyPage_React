import IAPI from '../APIInterfaces/IAPI';
import IPhotoAPI from '../APIInterfaces/IPhotoAPI';
import IPostsAPI from '../APIInterfaces/IPostsAPI';
import IUserAPI from '../APIInterfaces/IUserAPI';

const APILink = "https://jsonplaceholder.typicode.com";

class thisAPIUser implements IUserAPI{
    fetchByID(ID: number) : Promise<Response>{
        const fetchLink = `${APILink}/users/${ID}`;
        return fetch(fetchLink);
    }
    fetchAll() : Promise<Response>{
        const fetchLink = `${APILink}/users`;
        return fetch(fetchLink);
    }
}

class thisAPIPhoto implements IPhotoAPI{
    fetchAll(): Promise<Response> {
        const fetchLink = `${APILink}/photos`;
        return fetch(fetchLink);
    }
    fetchByID(ID: number) : Promise<Response>{
        const fetchLink = `${APILink}/photos/${ID}`;
        return fetch(fetchLink);
    }
}

class thisAPIPosts implements IPostsAPI{
    fetchByID(ID: number): Promise<Response> {
        const fetchLink = `${APILink}/posts/${ID}`;
        return fetch(fetchLink);
    }
    fetchAll() : Promise<Response>{
        const fetchLink = `${APILink}/posts`;
        return fetch(fetchLink);
    }
}

class JSONPlaceholderAPI implements IAPI{
    user = new thisAPIUser();
    photo = new thisAPIPhoto();
    posts = new thisAPIPosts();
}

export default JSONPlaceholderAPI;