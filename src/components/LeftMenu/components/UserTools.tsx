import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";

import MenuElement from '../../BasicGlobalElements/MenuElement';

const Content = styled.div`
    background-color: ${Colors.white};
    box-shadow: 0 0 1em ${Colors.lightGrey};
    margin: 5px;
    padding: 10px;
    height: 60px;
    display:flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
`;

const Row = styled.div`
    margin-top: 1px;
    margin-bottom: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavBtn = styled.button`
    width: 30px;
    height: 20px;
    background: none;
    border-style: solid;
	border-width: 2px;
	border-color: ${Colors.grey};
	border-radius: 4px;
`;

const Icon = styled.img`
    margin: 2px;
    height: 10px;
    width: auto;
`;

const UserTools : FC = () =>{

    return(
        <Content>
            <Row>
                <MenuElement href="/" srcImg="/media/icons/ecosystem.svg" elementName="Your network"/>
                <NavBtn>
                    <Icon alt="" src="/media/icons/user-plus.svg"/>
                </NavBtn>
            </Row>
            <Row>
                <MenuElement href="/publications" srcImg="/media/icons/ecosystem.svg" elementName="Your Publications"/>
                <NavBtn>
                    <Icon alt="" src="/media/icons/plus.svg"/>
                </NavBtn>
            </Row>
        </Content>
    )
}

export default UserTools;