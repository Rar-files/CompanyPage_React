import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";

import LatestPublications from "./LatestPublications";
import MainPost from "./MainPost";

const MainDiv = styled.div`
    height: 280px;
    width: 100%;
    display: flex;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    border-color: lightgray;
    box-shadow: 0px 0px 10px lightgray;
`;

const Publications : FC = () => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    return (
        <MainDiv>
            <MainPost post={postsList[1]} updateDate="7 jan 2020"/>
            <LatestPublications/>
        </MainDiv>
    );
}

export default Publications;