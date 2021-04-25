import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";

import ExpandedMenu from "./ExpandedMenu";

const Logo = styled.img`
    margin: 5px;
    height: 40px;
`;

const PageManagerDiv = styled.div`
    display: flex;
    align-items: center;
`;

const LeftManager: FC = () => {
    return(
        <PageManagerDiv>
            <Logo src={"/media/logo.png"}/>
            <ExpandedMenu/>
        </PageManagerDiv>
    )
}

export default LeftManager;