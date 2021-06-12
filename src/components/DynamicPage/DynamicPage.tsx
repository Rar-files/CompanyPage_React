import {FC} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";

import Home from "./components/Home";


const DynamicPage : FC = () =>{
    return(
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>

    )
}

export default DynamicPage;