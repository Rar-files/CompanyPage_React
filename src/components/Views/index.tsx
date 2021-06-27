import {FC} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import styled from 'styled-components';
import Entities from './components/Entities';

import Home from "./components/Home";
import User from "./components/User";
import People from "./components/People";
import Publications from './components/Publications';

const View = styled.div`
    margin-top: 20px;
    margin-right: 40px;
    height: 100%;
    width: 100%;
`;


const Views : FC = () =>{
    return(
        <View>
            <Switch>
                <Route path="/entities" exact>
                    <Entities/>
                </Route>
                <Route path="/publications" exact>
                    <Publications/>
                </Route>
                <Route path="/people" exact>
                    <People/>
                </Route>
                <Route path="/user/:id" exact>
                    <User/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </View>
    )
}

export default Views;