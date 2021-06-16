import {FC} from 'react';
import styled from "styled-components";
import { IPostType } from '../../../../../../assets/data/PostTypes';
import IPost from "../../../../../../interfaces/IPost";

export interface IPostElement{
    post: IPost;
    postType: IPostType;
    companyName: string;
    updateTime?: string;
    updateBy?: string;
}

const Post = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    width: 100%;
`;

const Body = styled.span`
    width: 100%;
`;

const PostTools = styled.div`
    width: 100%;
    display: flex;
`;

const PostToolsConttentBlock = styled.span`
`;

const TypeIcon = styled.img`

`;

const SeperatorPath = "media/icons/seperator.svg"

const PostElement : FC<IPostElement> = (props: IPostElement) => {

    return (
        <Post>
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

                <img src={SeperatorPath} alt = "*"/>

                <PostToolsConttentBlock>
                    <TypeIcon src={props.postType.icnSrc}/>
                    {props.postType.typeName}
                </PostToolsConttentBlock>

                <img src={SeperatorPath} alt = "*"/>

                <PostToolsConttentBlock>
                    {"Updated"}
                    { (props.updateTime !== undefined) ? " " + props.updateTime + " ago" : ""}
                    { (props.updateBy !== undefined) ? " by " + props.updateBy : ""}
                </PostToolsConttentBlock>
            </PostTools>
        </Post>
    )
}

export default PostElement;