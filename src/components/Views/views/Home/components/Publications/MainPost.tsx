import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPhotoReducers } from "../../../../../../reducers/photoReducers";
import { IUserReducers } from "../../../../../../reducers/userReducers";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";
import Loading from "../../../../../Common/Loading";

import {IPostElement} from "./Post";

const MainDiv = styled.div`
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
            <MainDiv>
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
                            <UserImg src={photosList[props.updateBy].thumbnailUrl}/>
                            {usersList[props.updateBy].name}
                        </User>
                    </PostInfo>
                </PostContent>
            </MainDiv>
        );
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default MainPost;