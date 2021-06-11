import {FC, useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserProfile } from "../../../../App";
import styled from 'styled-components';

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

    const userData: any = useContext(UserProfile);

    return (
        <AccountFrame>
            <AccountImg src={userData ? userData["thumbnailUrl"] : "/media/user.png"}/>
            <AccountData>
                <Name>

                </Name>
                <LinkBIO to="/"/>
            </AccountData>
        </AccountFrame>
    )
}

export default Account;