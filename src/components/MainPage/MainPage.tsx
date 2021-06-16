import {FC, createContext} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import DynamicPage from "../Views/Views"
const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    align-items: flex-start;
`;

const Main = styled.section`
    background-color: ${Colors.pageBackground};
    width: 100%;
    height: 99.4vh;
`;

const Page = styled.section`
    background-color: ${Colors.white};
    margin: 5px;
`;

export const UserProfile = createContext({});

const MainPage: FC = () => {

    // console.log("MainPageDidMounted")

    return (
        <Page>
            <Main>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                    <DynamicPage/>
                </Content>
            </Main>
        </Page>
    );
}

export default MainPage;