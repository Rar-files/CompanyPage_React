import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from '../../../../../../reducers';
import { IPhotoReducers } from '../../../../../../reducers/photoReducers';
import { IUserReducers } from '../../../../../../reducers/userReducers';
import { Colors } from '../../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';

import Loading from "../../../../../Common/Loading";

export interface IPostElement{
    post: IPost;
    updateDate?: string;
}

const ElementLink = styled(Link)`
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

const Content = styled.div`
    margin: 8px 0px;
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
`;

const Photo = styled.img`
    width: 60px;
    height: auto;
`;

const PostContent = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap:wrap;
    width: 100%;
`;

const Body = styled.span`
    width: 100%;
    color: ${Colors.accent};
    text-transform:capitalize;
    font-size: ${fontSize[14]};
`;

const PostInfo = styled.div`
    margin-top: 4px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    font-size: ${fontSize[12]};
    color: ${Colors.comment};
`;

const UpdateTime = styled.span`
`;

const User = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const UserImg = styled.img`
    margin: 0px 6px;
    width: 20px;
    border-radius: 50%;
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
        <ElementLink to={`/publications?=${props.post.id}`}>
            <Content>
                <Photo src={photosList[props.post.id].url}/>
                <PostContent>
                    <Body>
                        {props.post.body}
                    </Body>
                    <PostInfo>
                        <UpdateTime>
                            {props.updateDate}
                        </UpdateTime>
                        <User>
                            <UserImg src={photosList[props.post.userId].thumbnailUrl}/>
                            {usersList[props.post.userId].name}
                        </User>
                    </PostInfo>
                </PostContent>
            </Content>
        </ElementLink>
        )
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default Post;