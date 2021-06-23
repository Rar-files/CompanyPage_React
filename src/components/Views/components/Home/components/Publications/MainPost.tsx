import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPhotoReducers } from "../../../../../../reducers/photoReducers";
import { IUserReducers } from "../../../../../../reducers/userReducers";
import {IPostElement} from "./Post";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";
import {Link} from 'react-router-dom';

import Loading from "../../../../../Common/Loading";

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
    display: flex;
    height: 100%;
    width: 280px;
    justify-content: flex-end;
    align-items: center;
    color: ${Colors.white};
`;

const Picture = styled.img`
    position: absolute;
    height: 280px;
    width: 280px;
    border-radius: 6px 0px 0px 6px;
    filter: brightness(0.6);
`;

const PostContent = styled.div`
    height: 280px;
    width: 100%;
    margin: 10px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1;
`;

const Body = styled.span`
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
    font-weight: bold;
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const UserImg = styled.img`
    margin: 0px 6px;
    width: 20px;
    border-radius: 50%;
`;

const MainPost : FC<IPostElement> = (props: IPostElement) => {

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
                    <Picture src={photosList[props.post.id].url}/>
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
        );
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default MainPost;