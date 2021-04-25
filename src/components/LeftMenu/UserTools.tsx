import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import MenuElement from '../BasicPageElements/MenuElement';

const Content = styled.div`
    background-color: ${Colors.white};
    box-shadow: 0 0 1em ${Colors.lightGrey};
    margin: 5px;
    padding: 10px;
    height: 50px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavBtn = styled.button`
    width: 30px;
    height: 20px;
`;

const UserTools : FC = () =>{

    return(
        <Content>
            <Row>
                <MenuElement srcImg="/media/icons/ecosystem.svg" elementName="Your network"/>
                <NavBtn></NavBtn>
            </Row>
            <Row>
                <MenuElement srcImg="/media/icons/ecosystem.svg" elementName="Your Publications"/>
                <NavBtn></NavBtn>
            </Row>
        </Content>
    )
}

export default UserTools;