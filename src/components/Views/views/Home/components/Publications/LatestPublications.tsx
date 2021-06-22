import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";

import Post from "./Post";

const MainDiv = styled.div`

`;

const Title = styled.h2`

`;

const PublicationLink = styled(Link)`

`;

const LatestPublications : FC = () => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    return (
        <MainDiv>
            <Title/>
            
            {postsList
                .filter((element: IPost) => 2 < element.id && element.id <= 3)
	            .map((post: IPost) => <Post post={post} updateDate="7 jan 2020" updateBy={1} key={post.id}/>)
            }

            <PublicationLink to="/publications"/>
        </MainDiv>
    );
}

export default LatestPublications;