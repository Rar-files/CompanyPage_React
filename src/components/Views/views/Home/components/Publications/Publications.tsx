import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";

import LatestPublications from "./LatestPublications";
import MainPost from "./MainPost";

const MainDiv = styled.div`
    width: 100%;
    background-color: red;
`;

const Publications : FC = () => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    return (
        <MainDiv>
            <MainPost post={postsList[0]} updateDate="7 jan 2020" updateBy={1}/>
            <LatestPublications/>
        </MainDiv>
    );
}

export default Publications;