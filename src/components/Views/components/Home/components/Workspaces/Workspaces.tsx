import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WorkspacesData } from "../../../../../../assets/data/PagesData";
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
    overflow: hidden;
`;

const SectionTitle = styled.div`
    color: ${Colors.title};
    font-size: ${fontSize[20]};
    margin-left: 12px;
`;

const Posts = styled.div`
    width: 100%;
    height: 210px;
    max-width: calc(93vw - 190px);
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        height: 8px;
    }
 
    &::-webkit-scrollbar-track {
    background: none; 
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${Colors.comment}; 
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.accent}
    }
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
                        .map((post: IPost) => <Post post={post} updateDate={new Date(2021,4,post.id%30+1)} postType={WorkspacesData[post.id%5]} usersCount={(post.id*post.id)%100} key={post.id}/>)
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