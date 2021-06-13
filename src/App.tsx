import {FC, useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { useDispatch} from "react-redux";

import MainPage from './components/MainPage/MainPage'
import { getUserByID, getUsers } from './app/actions/userActions';
import {getPosts} from './app/actions/postActions';
import {getPhotoByID, getPhotos} from './app/actions/photoActions';

type GetUser = ReturnType<typeof getUserByID>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPosts>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPhoto = ReturnType<typeof getPhotoByID>

const App: FC = () => {

    const dispatch = useDispatch();
    const currentUserID = 1;

    useEffect(() => {
        dispatch<GetUser>(getUserByID(currentUserID));
        dispatch<GetUsers>(getUsers());
        dispatch<GetPosts>(getPosts());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPhoto>(getPhotoByID(currentUserID));
    }, [dispatch]);

    return (
        <Router>
            <MainPage/>
        </Router>
    );
}

export default App;