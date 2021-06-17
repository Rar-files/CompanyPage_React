import {FC} from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import styled from 'styled-components';

import Home from "./views/Home/Home";

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
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </View>
    )
}

export default Views;