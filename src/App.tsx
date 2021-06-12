import {FC, useEffect} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { useDispatch} from "react-redux";

import MainPage from './components/MainPage/MainPage'
import { getUserByID } from './app/actions/userActions';

type GetUser = ReturnType<typeof getUserByID>


const App: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUser>(getUserByID(1));
    }, [dispatch]);

    return (
        <Router>
            <MainPage/>
        </Router>
    );
}

export default App;