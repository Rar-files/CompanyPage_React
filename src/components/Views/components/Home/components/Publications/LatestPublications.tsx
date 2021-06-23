import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";

import Post from "./Post";

const MainDiv = styled.div`
    width: calc(100% - 318px);
    padding: 14px 20px;
`;

const Title = styled.div`
    color: ${Colors.accent};
    font-size: ${fontSize[22]};
`;

const PublicationLink = styled(Link)`
    font-size: ${fontSize[16]};
    &:link{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:visited{
        text-decoration: none;
        color: ${Colors.accent};
    }
    &:hover{
        text-decoration: none;
        color: ${Colors.textAccent};
    }
    &:active{
        text-decoration: none;
        color: ${Colors.accent};
    }
`;

const LatestPublications : FC = () => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    return (
        <MainDiv>
            <Title>
                Latest publications
            </Title>
            
            {postsList
                .slice(2, 5)
	            .map((post: IPost) => <Post post={post} updateDate="7 jan 2020" key={post.id}/>)
            }

            <PublicationLink to="/publications">
                See more publications
            </PublicationLink>
        </MainDiv>
    );
}

export default LatestPublications;