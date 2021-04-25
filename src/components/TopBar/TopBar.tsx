import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import SearchBar from "./TopBarComponents/SearchBar";
import LeftManager from "./TopBarComponents/LeftManager";
import RightManager from "./TopBarComponents/RightManager";

const TopBarWrapper = styled.div`
    background-color: ${Colors.elemBackground};
    width: 100%;
    height: 50px;
    box-shadow: 0 0 1em gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContentCell = styled.div`
    width: 30%;
`;


const TopBar: FC = () => {
    return (
        <TopBarWrapper>

            <ContentCell>
                <LeftManager/>
            </ContentCell>

            <SearchBar/>

            <ContentCell>
                <RightManager/>
            </ContentCell>

        </TopBarWrapper>
    )
}

export default TopBar;