import {FC} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotoReducers } from '../../../reducers/photoReducers';
import { IUserReducers } from '../../../reducers/userReducers';
import {Colors} from "../../../styledHelpers/Colors";
import { fontSize } from '../../../styledHelpers/FontSizes';
import Loading from '../../Common/Loading';

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

const UserLink = styled(Link)`
    &:link{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:visited{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:hover{
        text-decoration: none;
        color: ${Colors.textAccent};
    }
    &:active{
        text-decoration: none;
        color: ${Colors.accent};
    }
`;

const UserName = styled.p`
    margin: 5px;
    color: ${Colors.textAccent};
    font-weight: bold;
    font-size: ${fontSize[16]};
`;

const UserDescription = styled.p`
    margin: 5px;
    font-size: ${fontSize[14]};
    color: ${Colors.text};
`;

const User : FC = () => {
    const {userID, usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    try{
        return(
        <Content>
            <UserImage src={photosList[userID].url} alt="Img"></UserImage>
            <UserLink to={`/user/${userID}`}>
                <UserName>{usersList[userID].name}</UserName>
            </UserLink>
            <UserDescription>{usersList[userID].company.name}</UserDescription>
        </Content>
        )
    }
    catch{
        return <Loading/>
    }
}

export default User;