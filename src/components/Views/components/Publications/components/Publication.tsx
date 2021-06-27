import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import IPost from "../../../../../interfaces/IPost";
import { IState } from '../../../../../reducers';
import { IUserReducers } from '../../../../../reducers/userReducers';
import { Colors } from '../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';

import Loading from '../../../../Common/Loading';
import { IMenuElement } from '../../../../Common/MenuElement';
import { IPhotoReducers } from '../../../../../reducers/photoReducers';

export interface IPostElement{
    post: IPost;
    postType: IMenuElement;
    companyName: string;
    updateDate: Date;
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
    padding: 4px 8px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    border-radius: 4px;
    box-shadow: 2px 2px 6px lightgray;
`;

const Title = styled.span`
    width: 100%;
    margin: 4px;
    text-transform:capitalize;
    font-size: ${fontSize[14]};
    color: ${Colors.textAccent};
`;

const Body = styled.span`
    width: 100%;
    margin: 4px;
    font-size: ${fontSize[12]};
    color: ${Colors.text};
    line-height: normal;
`;

const PostInfo = styled.div`
    margin: 4px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    font-size: ${fontSize[12]};
    color: ${Colors.text};
`;

const UpdateTime = styled.span`
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const UserImg = styled.img`
    margin: 0px 6px 0px 0px;
    width: 20px;
    border-radius: 50%;
`;


const Seperator = styled.div`
    height: 4px;
    width: 4px;
    margin: 4px 16px;
    background-color: ${Colors.accent};
    border-radius: 50%;
`;

const Post : FC<IPostElement> = (props: IPostElement) => {

    const TimeFormater = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

    const {usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))

    try{
        return (
            <ElementLink to={`/publications`}>
                <Content>
                    <Title>
                        {props.post.title}
                    </Title>

                    <Body>
                        {props.post.body}
                    </Body>

                    <PostInfo>
                        <UpdateTime>
                            { (props.updateDate !== undefined) ? " " +  TimeFormater.format(Math.round((props.updateDate.getTime() - Date.now()) / (1000 * 3600 * 24)), 'days') : ""}
                        </UpdateTime>

                        <Seperator/>

                        <User>
                            <UserImg src={photosList[props.post.userId].thumbnailUrl}/>
                            {usersList[props.post.userId].name}
                        </User>
                    </PostInfo>
                </Content>
            </ElementLink>
        )
    }
    catch{
        return <Loading/>
    }
}

export default Post;