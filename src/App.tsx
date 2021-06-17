import {FC, useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { useDispatch} from "react-redux";
import WebFont from 'webfontloader';

import MainPage from './components/MainPage/MainPage'
import { getCurrentUserID, getUsers } from './app/actions/userActions';
import {getPosts} from './app/actions/postActions';
import {getPhotos} from './app/actions/photoActions';

type GetCurrentUserID = ReturnType<typeof getCurrentUserID>
type GetUsers = ReturnType<typeof getUsers>
type GetPosts = ReturnType<typeof getPosts>
type GetPhotos = ReturnType<typeof getPhotos>

const App: FC = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetCurrentUserID>(getCurrentUserID(1));
        dispatch<GetUsers>(getUsers());
        dispatch<GetPosts>(getPosts());
        dispatch<GetPhotos>(getPhotos());

        WebFont.load({
            google: {
                families: ['Roboto']
            }
        })
    }, []);

    return (
        <Router>
            <MainPage/>
        </Router>
    );
}

export default App;