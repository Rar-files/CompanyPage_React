import {FC} from 'react';
import styled from 'styled-components';

import MenuElement from '../../BasicPageElements/MenuElement';

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
            <MenuElement href="/" srcImg="/media/icons/publications.svg" elementName="Publications"/>
            <MenuElement href="/" srcImg="/media/icons/ecosystem.svg" elementName="Ecosystem"/>
            <MenuElement href="/" srcImg="/media/icons/entities2.svg" elementName="Entities"/>
        </Content>
    )
}

export default NavMenu;