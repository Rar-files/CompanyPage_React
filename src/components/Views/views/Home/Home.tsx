import { FC } from "react";
import styled from "styled-components";

import Publications from './components/Publications/Publications';
import Workspaces from './components/Workspaces/Workspaces'
import ResumeYourWork from './components/ResumeYourWork/ResumeYourWork';

const HomeDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Home : FC = () => {

    return (
        <HomeDiv>
            {/* <Publications/> */}
            <Workspaces/>
            <ResumeYourWork/>
        </HomeDiv>
    );
}

export default Home;