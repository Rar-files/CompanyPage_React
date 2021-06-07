import {FC} from 'react';
import styled from 'styled-components';

import User from './components/User';
import UserTools from './components/UserTools';
import NavMenu from './components/NavMenu';

const Content = styled.div`
    position: relative;
    margin: 5px;
    height: 96vh;
    width: 232px;
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