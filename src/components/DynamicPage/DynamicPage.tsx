import {FC} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";


const DynamicPage : FC = () =>{
    return(
        <Switch>
            <Route path="/test">
            </Route>
            <Route path="/">
            </Route>
        </Switch>

    )
}

export default DynamicPage;