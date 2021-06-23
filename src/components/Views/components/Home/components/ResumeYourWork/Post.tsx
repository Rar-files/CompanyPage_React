import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import IPost from "../../../../../../interfaces/IPost";
import { IState } from '../../../../../../reducers';
import { IUserReducers } from '../../../../../../reducers/userReducers';
import { Colors } from '../../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';

import Loading from '../../../../../Common/Loading';
import { IMenuElement } from '../../../../../Common/MenuElement';

export interface IPostElement{
    post: IPost;
    postType: IMenuElement;
    companyName: string;
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
    padding: 2px 8px;
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

const PostTools = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 4px;
    font-size: ${fontSize[10]};
    color: ${Colors.text};
`;

const PostToolsConttentBlock = styled.span`
    display: flex;
    align-items: center;
`;

const PostComment = styled(PostToolsConttentBlock)`
    color: ${Colors.comment};
`;

const TypeIcon = styled.img`
    height: 12px;
    width: auto;
    margin: 0px 2px;
`;

const Seperator = styled.div`
    height: 4px;
    width: 4px;
    margin: 4px 10px;
    background-color: ${Colors.accent};
    border-radius: 50%;
`;

const Post : FC<IPostElement> = (props: IPostElement) => {

    const TimeFormater = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

    const {usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))


    try{
        return (
            <ElementLink to={`/entities?=${props.post.id}`}>
                <Content>
                    <Title>
                        {props.post.title}
                    </Title>

                    <Body>
                        {props.post.body}
                    </Body>

                    <PostTools>
                        <PostToolsConttentBlock>
                            {props.companyName}
                        </PostToolsConttentBlock>

                        <Seperator/>

                        <PostToolsConttentBlock>
                            <TypeIcon src={props.postType.srcImg}/>
                            {props.postType.elementName}
                        </PostToolsConttentBlock>

                        <Seperator/>

                        <PostComment>
                            {"Updated"}
                            { (props.updateDate !== undefined) ? " " +  TimeFormater.format(Math.round((props.updateDate.getTime() - Date.now()) / (1000 * 3600 * 24)), 'days') : ""}
                            { (usersList[props.post.userId].name !== undefined) ? " by " + usersList[props.post.userId].name : ""}
                        </PostComment>
                    </PostTools>
                </Content>
            </ElementLink>
        )
    }
    catch{
        return <Loading/>
    }
}

export default Post;