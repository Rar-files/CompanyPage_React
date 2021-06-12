import {FC} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../../reducers';
import { IUsersReducer } from '../../../../reducers/userReducers';

const AccountFrame = styled.div`
    margin: 2px;
    display: flex;
`;

const AccountImg = styled.img`
    width: 20%;
    height: auto;
    border-radius: 20px;
`;

const AccountData = styled.div`

`;

const Name = styled.span`

`;

const LinkBIO = styled(Link)`

`;

const Account : FC = () => {
    const {user} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    return (
        <AccountFrame>
            <AccountImg src={"/media/user.png"}/>
            <AccountData>
                <Name>
                    {user.name}
                </Name>
                <LinkBIO to="/"/>
            </AccountData>
        </AccountFrame>
    )
}

export default Account;