import {FC, createContext, useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { useAppDispatch, useAppSelector} from './app/hooks';
import { fetchAllUsers } from "./reducers/userSlice";
import { fetchAllPosts } from "./reducers/postsSlice";
import { fetchPhotoByID } from "./reducers/photoSlice";

import MainPage from './components/MainPage/MainPage'

export const UserProfile = createContext({});

const App: FC = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user)
    const { posts } = useAppSelector((state) => state.posts)
    const { photo } = useAppSelector((state) => state.photo)

    const userObject: object = {
        ...user,
        ...posts,
        ...photo 
      } 

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllPosts());

        const promise = dispatch(fetchPhotoByID(1))
        return () => {
            promise.abort();
        }
    }, [dispatch]);
    

    return (
        <Router>
            <UserProfile.Provider value={userObject}>
                <MainPage/>
            </UserProfile.Provider>
        </Router>
    );
}

export default App;