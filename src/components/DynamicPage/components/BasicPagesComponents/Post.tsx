import {FC} from 'react';
import styled from "styled-components";
import { IPostType } from '../../../../assets/data/PostTypes';
import IPost from "../../../../interfaces/IPost";

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

const PostElement : FC<IPostElement> = ({post,postType,companyName,updateTime,updateBy}) => 
    <aside>
        <Post>
            <Title>
                {post.title}
            </Title>
            <Body>
                {post.body}
            </Body>
            <PostTools>
                <PostToolsConttentBlock>
                    {companyName}
                </PostToolsConttentBlock>

                <img src={SeperatorPath} alt = "*"/>

                <PostToolsConttentBlock>
                    <TypeIcon src={postType.icnSrc}/>
                    {postType.typeName}
                </PostToolsConttentBlock>

                <img src={SeperatorPath} alt = "*"/>

                <PostToolsConttentBlock>
                    {"Updated"}
                    { (updateTime !== undefined) ? " " + updateTime + " ago" : ""}
                    { (updateBy !== undefined) ? " by " + updateBy : ""}
                </PostToolsConttentBlock>
            </PostTools>
        </Post>
    </aside>;

export default PostElement;