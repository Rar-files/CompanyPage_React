import {FC} from 'react';
import styled from 'styled-components';

import MenuElement from '../../Common/MenuElement';

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
            <MenuElement href="/publications" srcImg="/media/icons/publications.svg" elementName="Publications"/>
            <MenuElement href="/ecosystem" srcImg="/media/icons/ecosystem.svg" elementName="Ecosystem"/>
            <MenuElement href="/entities" srcImg="/media/icons/entities2.svg" elementName="Entities"/>
        </Content>
    )
}

export default NavMenu;