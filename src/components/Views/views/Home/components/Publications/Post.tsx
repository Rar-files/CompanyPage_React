import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from '../../../../../../reducers';
import { IPhotoReducers } from '../../../../../../reducers/photoReducers';
import { IUserReducers } from '../../../../../../reducers/userReducers';

import Loading from "../../../../../Common/Loading";

export interface IPostElement{
    post: IPost;
    updateDate?: string;
    updateBy: number;
}

const MainDiv = styled.div`
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
`;

const Photo = styled.img`
    width: 30px;
    height: auto;
`;

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100px;
`;

const Body = styled.span`
    width: 100%;
`;

const PostTools = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;

const UpdateTime = styled.span`

`;

const User = styled.div`
    display: flex;
`;

const UserImg = styled.img`
`;


const Post : FC<IPostElement> = (props: IPostElement) => {

    const {usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    try{
    return (
            <MainDiv>
                <Photo src={photosList[props.post.id].url}/>
                <PostContent>
                    <Body>
                        {props.post.body}
                    </Body>
                    <PostTools>
                        <UpdateTime>
                            {props.updateDate}
                        </UpdateTime>
                        <User>
                            <UserImg src={photosList[props.updateBy].url}/>
                            {usersList[props.updateBy].name}
                        </User>
                    </PostTools>
                </PostContent>
            </MainDiv>
        )
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default Post;