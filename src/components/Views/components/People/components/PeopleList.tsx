import { FC } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import IUser from "../../../../../interfaces/IUser";
import { IState } from "../../../../../reducers";
import { IUserReducers } from "../../../../../reducers/userReducers";
import Loading from "../../../../Common/Loading";

import Person from './Person';

interface IPeopleList {
    filterValue: string;
}

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PeopleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const EntitiesList : FC<IPeopleList> = (props: IPeopleList) => {
    const {usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    let list = usersList.filter((element: IUser) => element.name.toLowerCase().includes(props.filterValue.toLowerCase()));

    try{
        return(     
            <Content>
                <PeopleList>
                    {list.map((user: IUser) => <Person user={user} key={user.id}/>)}
                </PeopleList>

            </Content>
        )
    }
    catch{
        return <Loading/>
    }
}

export default EntitiesList;