import {FC} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../../reducers';
import { IPhotoReducers } from '../../../../reducers/photoReducers';
import { IUserReducers } from '../../../../reducers/userReducers';
import { Colors } from '../../../../styledHelpers/Colors';
import {fontSize} from '../../../../styledHelpers/FontSizes';
import Loading from '../../../Common/Loading';

const AccountFrame = styled.div`
    margin: 2px;
    display: flex;
`;

const AccountImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 20px;
`;

const AccountData = styled.div`
    margin: 0px 4px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-size: ${fontSize[14]};
    margin-bottom: 2px;
`;

const LinkBIO = styled(Link)`
    font-size: ${fontSize[12]};
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
        color: ${Colors.textAccent};
    }
    &:active{
        text-decoration: none;
        color: ${Colors.text};
    }
`;

const Account : FC = () => {
    const {userID, usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    try{
        return (
        <AccountFrame>
            <AccountImg src={photosList[userID].url} alt="Img"/>
            <AccountData>
                <Name>
                    {usersList[userID].name}
                </Name>
                <LinkBIO to={"/user/"+usersList[userID].id}>
                    See profile
                </LinkBIO>
            </AccountData>
        </AccountFrame>
        )
    }
    catch{
        return <Loading/>
    }
}

export default Account;