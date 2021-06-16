import {FC} from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from "react-router-dom";
import {Colors} from "../../styledHelpers/Colors"

export interface IMenuElement {
    id?: number;
    srcImg: string;
    elementName: string;
    href: string;
}

const Element = styled.div`
    margin: 2px;
    margin-bottom: 8px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 22px;
`;

const Icon = styled.img`
`;

const Name = styled.span`
    margin-left: 10px;
    font-size: ${fontSize[14]};
`;

const ElementLink = styled(Link)`
    &:link{
        text-decoration: none;
        color: ${Colors.text};
    }
    &:visited{
        text-decoration: none;
        color: ${Colors.text};
    }
    &:hover{
        text-decoration: none;
        color: ${Colors.hover};
    }
    &:active{
        text-decoration: none;
        color: ${Colors.text};
    }
`;

const MenuElement : FC<IMenuElement> = (props : IMenuElement) => {

    return(
        <ElementLink to={props.href}>
            <Element>
                <Icon src={props.srcImg}></Icon>
                <Name>{props.elementName}</Name>
            </Element>
        </ElementLink>
    )
}

export default MenuElement;