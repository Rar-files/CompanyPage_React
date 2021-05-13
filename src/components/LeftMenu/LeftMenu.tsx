import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import User from './User';
import UserTools from './UserTools';
import NavMenu from './NavMenu';

const Content = styled.div`
    position: relative;
    margin: 5px;
    height: 96vh;
    width: 22%;
`;

const UserPanel = styled.div`
    margin: 5px;
    padding: 5px;
`;

const LeftMenu : FC = () => {

    return(
        <Content>
            <UserPanel>
                <User></User>
                <UserTools></UserTools>
                <NavMenu></NavMenu>
            </UserPanel>
        </Content>
    )
}

export default LeftMenu;