/* eslint-disable eqeqeq */
import { FC, useState} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PostTypes } from "../../../../../../assets/data/PostTypes";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";

import Post from './Post';

interface IResumeYourWorkPosts {
    filterValue: string;
}

const PostsDiv = styled.div`

`;

const NavigateMenu = styled.div`
    display: flex;
`;

const NavigateBtn = styled.div`

`;

const ResumeYourWorkPosts : FC<IResumeYourWorkPosts> = (props: IResumeYourWorkPosts) => {

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    let list = postsList.filter((element: IPost) => element.title.toLowerCase().includes(props.filterValue.toLowerCase()));
    let postsOnSite : number;

    if(currentPageIndex >= Math.round(list.length/10)-1)
    {
        postsOnSite = (list.length%10)+6;
        if(currentPageIndex > Math.round(list.length/10)-1)
            setCurrentPageIndex(Math.round(list.length/10)-1);
    }
    else
        postsOnSite = 10;


    return (
        <PostsDiv>
            {list.slice(currentPageIndex*10, currentPageIndex*10+postsOnSite)
	            .map((post: IPost) => <Post post={post} postType={PostTypes[post.id%3]} updateTime={new Date(2021,4,post.id%30+1)} companyName="Company" key={post.id}/>)}
            
            <NavigateMenu>
                {0< currentPageIndex &&
                    <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex-1)}>
                        Prev
                    </NavigateBtn>}
                {(list.length/10)-2 > currentPageIndex &&
                    <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex+1)}>
                        Next
                    </NavigateBtn>
                }
            </NavigateMenu>
        </PostsDiv>
    );
}

export default ResumeYourWorkPosts;