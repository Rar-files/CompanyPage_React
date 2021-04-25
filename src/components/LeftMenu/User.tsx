import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Content = styled.div`
    background-color: ${Colors.white};
    box-shadow: 0 0 1em ${Colors.lightGrey};
    margin: 5px;
    padding: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const UserImage = styled.img`
    width: 50px;
`;

const UserName = styled.p`
    margin: 5px;
`;

const UserDescription = styled.p`
    margin: 5px;
`;

const User : FC = () => {

    return(
        <Content>
            <UserImage src="/media/logo.png"></UserImage>
            <UserName>Imię Nazwisko</UserName>
            <UserDescription> opis</UserDescription>
        </Content>
    )
}

export default User;