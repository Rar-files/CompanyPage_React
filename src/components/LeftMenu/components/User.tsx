import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotoReducers } from '../../../reducers/photoReducers';
import { IUserReducers } from '../../../reducers/userReducers';
import {Colors} from "../../../styledHelpers/Colors";

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
    border-radius: 30px;
    width: 50px;
`;

const UserName = styled.p`
    margin: 5px;
`;

const UserDescription = styled.p`
    margin: 5px;
`;

const User : FC = () => {
    const {user} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photo} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    return(
        <Content>
            <UserImage src={photo.url} alt="Img"></UserImage>
            <UserName>{user.name}</UserName>
            <UserDescription>{user.company.name}</UserDescription>
        </Content>
    )
}

export default User;