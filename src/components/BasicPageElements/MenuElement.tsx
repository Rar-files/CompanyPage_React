import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

type MenuElementProps = {
    srcImg: string;
    elementName: string;
}

const Element = styled.div`
    margin: 2px;
    margin-bottom: 8px;
    display: flex;
    justify-content: left;
    align-items: center;
`;

const Icon = styled.img`
`;

const Name = styled.span`
    margin-left: 10px;
`;

const MenuElement = ({srcImg, elementName} : MenuElementProps) =>
    <aside>
        <Element>
            <Icon src={srcImg}></Icon>
            <Name>{elementName}</Name>
        </Element>
    </aside>

export default MenuElement;