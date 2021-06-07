import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import {BrowserRouter as Router,} from "react-router-dom";

import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import DynamicPage from "../DynamicPage/DynamicPage"

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
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

const MainPage: FC = () => {
    return (
        <Page>
            <Main>
                <Router>
                    <TopBar/>
                    <Content>
                        <LeftMenu/>
                        <DynamicPage/>
                    </Content>
                </Router>
            </Main>
        </Page>
    );
}

export default MainPage;