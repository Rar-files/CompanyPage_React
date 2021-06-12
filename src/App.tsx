import {FC, useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { useDispatch} from "react-redux";

import MainPage from './components/MainPage/MainPage'
import { getUserByID, getUsers } from './app/actions/userActions';
import {getPosts} from './app/actions/postActions';
import {getPhotos} from './app/actions/photoActions';

type GetUser = ReturnType<typeof getUserByID>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPosts>
type GetPhotos = ReturnType<typeof getPhotos>

const App: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUser>(getUserByID(1));
        dispatch<GetUsers>(getUsers());
        dispatch<GetPosts>(getPosts());
        dispatch<GetPhotos>(getPhotos());
    }, [dispatch]);

    return (
        <Router>
            <MainPage/>
        </Router>
    );
}

export default App;