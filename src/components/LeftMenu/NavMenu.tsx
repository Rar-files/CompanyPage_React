import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import MenuElement from '../BasicPageElements/MenuElement';

const Content = styled.div`
    padding: 2px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-star;
`;

const NavMenu : FC = () => {

    return(
        <Content>
            <MenuElement srcImg="/media/icons/publications.svg" elementName="Publications"/>
            <MenuElement srcImg="/media/icons/ecosystem.svg" elementName="Ecosystem"/>
            <MenuElement srcImg="/media/icons/entities2.svg" elementName="Entities"/>
        </Content>
    )
}

export default NavMenu;