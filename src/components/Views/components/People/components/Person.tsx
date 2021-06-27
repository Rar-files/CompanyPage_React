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

const Body = styled.div`
    width: 420px;
    height: 40px;
    margin: 6px 4px;
    display: flex;
    flex-wrap: wrap;
`;

const BodyElement = styled.div`
    width: 40%;
    font-size: ${fontSize[10]};
    color: ${Colors.comment};
    line-height: normal;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Seperator = styled.div`
    height: 4px;
    width: 4px;
    margin: 4px 10px;
    background-color: ${Colors.accent};
    border-radius: 50%;
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
                            <BodyElement>
                                {`${props.user.address.street} `}
                                {props.user.address.suite}
                            </BodyElement>

                            <Seperator/>

                            <BodyElement>
                                {props.user.email}
                            </BodyElement>

                            <BodyElement>
                                {props.user.address.city}
                            </BodyElement>

                            <Seperator/>

                            <BodyElement>
                                {props.user.phone}
                            </BodyElement>
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