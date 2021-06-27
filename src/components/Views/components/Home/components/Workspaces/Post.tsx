import { FC } from "react"
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { IMenuElement } from "../../../../../Common/MenuElement";
import { Link } from 'react-router-dom';

import Loading from "../../../../../Common/Loading";
import { useSelector } from "react-redux";
import { IState } from "../../../../../../reducers";
import { IPhotoReducers } from "../../../../../../reducers/photoReducers";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";

export interface IPostElement{
    post: IPost;
    postType: IMenuElement;
    usersCount: number;
    updateDate?: Date;
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
    height: 90%;
    width: 230px;
    margin: 15px 10px 0px 0px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    box-shadow: 2px 2px 6px lightgray;
`;

const PostBackground = styled.div`
    height: 40%;
    width: 100%;
`;

const Picture = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    object-fit: cover;
`;

const PostContent = styled.div`
    height: 60%;
    width: 92%;
    margin: 10px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
`;

const PostTitle = styled.div`
    height: 43px;
    width: 210px;
    display: flex;
    align-items: center;
`;

const PostTitleText = styled.div`
    height: 14px;
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const PostIconDiv = styled.div`
    padding: 6px;
    height: 32px;
    background-color: ${Colors.white};
    margin-right: 8px;
    border-radius: 2px;
    box-shadow: 2px 2px 6px gray;
`;

const PostIcon = styled.img`
    height: 32px;
    width: auto;
`;

const PostInfo = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

const PostType = styled.div`
    font-size: ${fontSize[12]};
    color: ${Colors.text};
    display: flex;
    align-items: center;
    margin: 0px 4px;
`;

const TypeIcon = styled.img`
    height: 14px;
    margin: 0px 4px 0px 0px;
`;

const Users = styled.div`
    font-size: ${fontSize[12]};
    color: ${Colors.text};
    display: flex;
    align-items: center;
`;

const UsersIcn = styled.img`
    height: 14px;
    margin: 0px 4px;
`;

const UpdateTime = styled.span`
    margin-top: 6px;
    display: flex;
    font-weight: bold;
    font-size: ${fontSize[10]};
    color: ${Colors.title};
`;

const Seperator = styled.div`
    height: 2px;
    width: 2px;
    margin: 4px 4px;
    background-color: ${Colors.accent};
    border-radius: 50%;
`;

const Post : FC<IPostElement> = (props: IPostElement) => {

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }));

    const TimeFormater = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

    try{
        return (
            <ElementLink to={`/entities?=${props.post.id}`}>
                <Content>
                    <PostBackground>
                        <Picture src={photosList[props.post.id].url}/>
                    </PostBackground>
                    <PostContent>
                        <PostTitle>
                            <PostIconDiv>
                                <PostIcon src={photosList[props.post.id].url}/>
                            </PostIconDiv>
                            <PostTitleText>
                                {props.post.title};
                            </PostTitleText>
                        </PostTitle>
                        <PostInfo>
                            <PostType>
                                <TypeIcon src={props.postType.srcImg}/>
                                {props.postType.elementName}
                            </PostType>
                            <Seperator></Seperator>
                            <Users>
                                <UsersIcn src="./media/icons/people.svg"/>
                                {`${props.usersCount} users`}
                            </Users>
                        </PostInfo>
                        <UpdateTime>
                                Last update
                                { (props.updateDate !== undefined) ? " " +  TimeFormater.format(Math.round((props.updateDate.getTime() - Date.now()) / (1000 * 3600 * 24)), 'days') : ""}
                        </UpdateTime>
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

export default Post;