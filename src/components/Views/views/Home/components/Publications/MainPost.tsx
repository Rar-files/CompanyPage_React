import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPhotoReducers } from "../../../../../../reducers/photoReducers";
import { IUserReducers } from "../../../../../../reducers/userReducers";
import Loading from "../../../../../Common/Loading";

import {IPostElement} from "./Post";

const MainDiv = styled.div`
    display: flex;
    height: 130px;
    width: 130px;
    justify-content: flex-flex-end;
    align-items: center;
`;

const Picture = styled.img`
    z-index: -1;
`;

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100px;
    height: 50px;
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
        );
    }
    catch{
        return (
            <Loading/>
        );
    }
}

export default MainPost;