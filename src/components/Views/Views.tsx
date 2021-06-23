import {FC} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import styled from 'styled-components';
import Entities from './components/Entities/Entities';

import Home from "./components/Home/Home";
import Publications from './components/Publications/Publications';

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
                <Route path="/entities">
                    <Entities/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/publications">
                    <Publications/>
                </Route>
            </Switch>
        </View>
    )
}

export default Views;