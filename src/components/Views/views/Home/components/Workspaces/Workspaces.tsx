import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PostTypes } from "../../../../../../assets/data/PostTypes";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";
import Loading from "../../../../../Common/Loading";

import Post from "./Post";

const Content = styled.div`
    margin: 15px 0px;
    width: 100%;
    background-color: #dab3b3;
    overflow: hidden;
`;

const SectionTitle = styled.div`
    color: ${Colors.title};
    font-size: ${fontSize[20]};
    margin-left: 12px;
`;

const Posts = styled.div`
    width: 100%;
    max-width: calc(93vw - 190px);
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
`;

const Workspaces : FC = () => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }));

    try{
        return (
        <Content>
            <SectionTitle>
                Workspaces
            </SectionTitle>
            <Posts>
                {postsList
                    .slice(0, 3)
                    .map((post: IPost) => <Post post={post} updateDate={new Date(2021,4,post.id%30+1)} postType={PostTypes[post.id%3]} usersCount={(post.id*post.id)%100} key={post.id}/>)
                }
            </Posts>
        </Content>
        );
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default Workspaces;