import {FC} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../../reducers';
import { IPhotoReducers } from '../../../../reducers/photoReducers';
import { IUserReducers } from '../../../../reducers/userReducers';
import {fontSize} from '../../../../styledHelpers/FontSizes';

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

`;

const LinkBIO = styled(Link)`
    font-size: ${fontSize['12']};
`;

const Account : FC = () => {
    const {user} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photo} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    return (
        <AccountFrame>
            <AccountImg src={photo.url} alt="Img"/>
            <AccountData>
                <Name>
                    {user.name}
                </Name>
                <LinkBIO to={"/user?"+user.id}>
                    See profile
                </LinkBIO>
            </AccountData>
        </AccountFrame>
    )
}

export default Account;