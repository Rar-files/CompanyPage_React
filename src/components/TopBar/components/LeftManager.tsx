import {FC} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import ExpandedMenu from "./ExpandedMenu/ExpandedMenu";

const Logo = styled.img`
    margin: 10px;
    height: 38px;
`;

const PageManagerDiv = styled.div`
    display: flex;
    align-items: center;
`;

const LeftManager: FC = () => {
    return(
        <PageManagerDiv>
            <Link to="/">
                <Logo src={"/media/logo.png"}/>
            </Link>
            <ExpandedMenu/>
        </PageManagerDiv>
    )
}

export default LeftManager;