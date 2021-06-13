import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PostTypes } from "../../../../assets/data/PostTypes";
import IPost from "../../../../interfaces/IPost";
import { IState } from "../../../../reducers";
import { IPostReducers } from "../../../../reducers/postReducers";
import Post from '../BasicPagesComponents/Post';

const PostsDiv = styled.div`

`;

const Home : FC = () => {
    const[filtred, setFiltred] = useState("");
    const[postListFill, setPostlistFill] = useState([] as IPost[]);

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))


    // useEffect(() => {
    //     if(typeof postsList === "IPost[]")
    //     setPostlistFill(postsList);
    // });

    const [isLoading, setLoading] = useState(true);
  
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    return (
        <PostsDiv>
            {postListFill
                .filter((element: IPost) => element.title.toLowerCase().includes(filtred.toLowerCase()))
	            .map((post: IPost) => <Post post={post} postType={PostTypes.test} companyName="company"/>)}
        </PostsDiv>
    );
}

export default Home;