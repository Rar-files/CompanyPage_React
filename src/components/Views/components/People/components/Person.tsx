import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import IUser from "../../../../../interfaces/IUser";
import { IState } from "../../../../../reducers";
import { IPhotoReducers } from "../../../../../reducers/photoReducers";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import Loading from "../../../../Common/Loading";

export interface IPersonElement{
    user: IUser;
}

export const Content = styled.div`
    height: 70px;
    width: 500px;
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

const PersonIcn = styled.img`
    margin: 4px;
    width: 60px;
    height: 60px;
`;

const PersonData = styled.div`
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

const Person : FC<IPersonElement> = (props: IPersonElement) => {

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))


    try{
        return(
            <ElementLink to={`/user/${props.user.id}`}>
                <Content>
                    <PersonIcn src={photosList[props.user.id].url}/>

                    <PersonData>
                        <Title>
                            {props.user.name}
                        </Title>

                        <Body>
                            {}
                        </Body>
                    </PersonData>
                </Content>
            </ElementLink>
        )
    }
    catch{
        return <Loading/>
    }
}

export default Person;