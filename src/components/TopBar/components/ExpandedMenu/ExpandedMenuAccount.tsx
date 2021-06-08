import styled from 'styled-components';
import {FC} from 'react';
import {Link} from 'react-router-dom';

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

    return (
        <AccountFrame>
            <AccountImg src="/media/user.png"/>
            <AccountData>
                <Name>

                </Name>
                <LinkBIO to="/"/>
            </AccountData>
        </AccountFrame>
    )
}

export default Account;