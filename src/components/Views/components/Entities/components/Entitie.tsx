import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import IPost from "../../../../../interfaces/IPost";
import { IState } from "../../../../../reducers";
import { IPhotoReducers } from "../../../../../reducers/photoReducers";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import Loading from "../../../../Common/Loading";

export interface IEntitieElement{
    post: IPost;
}

export const Content = styled.div`
    height: 70px;
    width: 210px;
    display: flex;
    margin: 2px;
    background-color: ${Colors.white};
    box-shadow: 2px 2px 6px lightgray;
`;
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

const EntitieIcn = styled.img`
    margin: 4px;
    width: 60px;
    height: 60px;
`;

const EntitieData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.span`
    width: 132px;
    margin: 4px;
    text-transform:capitalize;
    font-size: ${fontSize[14]};
    color: ${Colors.textAccent};
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Body = styled.span`
    width: 132px;
    height: 20px;
    margin: 8px 4px;;
    font-size: ${fontSize[10]};
    color: ${Colors.comment};
    line-height: normal;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Entitie : FC<IEntitieElement> = (props: IEntitieElement) => {

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))


    try{
        return(
            <ElementLink to={`/entities?=${props.post.id}`}>
                <Content>
                    
                    <EntitieIcn src={photosList[props.post.id].url}/>

                    <EntitieData>
                        <Title>
                            {props.post.title}
                        </Title>

                        <Body>
                            {props.post.body}
                        </Body>
                    </EntitieData>
                </Content>
            </ElementLink>
        )
    }
    catch{
        return <Loading/>
    }
}

export default Entitie;