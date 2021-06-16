import { FC} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PostTypes } from "../../../../../../assets/data/PostTypes";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";
import Post from './Post';

interface IResumeYourWorkPosts {
    filterValue: string;
    posts: {
        from: number;
        to: number;
    }
}

const PostsDiv = styled.div`

`;

const ResumeYourWorkPosts : FC<IResumeYourWorkPosts> = (props: IResumeYourWorkPosts) => {

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    return (
        <PostsDiv>
            {postsList
                .filter((element: IPost) => element.title.toLowerCase().includes(props.filterValue.toLowerCase()))
                .filter((element: IPost) => props.posts.from < element.id && element.id <= props.posts.to)
	            .map((post: IPost) => <Post post={post} postType={PostTypes.test} companyName="company" key={post.id}/>)}
        </PostsDiv>
    );
}

export default ResumeYourWorkPosts;