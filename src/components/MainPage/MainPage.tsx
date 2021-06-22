import {FC, createContext} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import Views from "../Views/Views"

const Page = styled.section`
    background-color: ${Colors.pageBackground};
    padding: 5px;
`;

const Main = styled.section`
    width: 100%;
    height: 99.4vh;
    font-family: 'Roboto';
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const UserProfile = createContext({});

const MainPage: FC = () => {

    return (
        <Page>
            <Main>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                    <Views/>
                </Content>
            </Main>
        </Page>
    );
}

export default MainPage;