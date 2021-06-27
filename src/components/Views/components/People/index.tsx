import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import Loading from "../../../Common/Loading";

import PeopleList from './components/PeopleList';

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const UsersList = styled.div`
    height: 100%;
    width: 502px;
    display: flex;
    flex-direction: column;
`;

const TopBar = styled.div`
    margin: 2px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FilterBarDiv = styled.label`
    vertical-align: center;
    width: 170px;
    height: 28px;
    background-color: ${Colors.white};
    border-color: ${Colors.lightGrey};
    border-radius: 4px;
    box-shadow: 0px 0px 6px lightgray;
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FilterInput = styled.input`
    border: none;
    padding-left: 4px;
    width: 100%;
    height: 26px;
    &:focus {
        outline:none!important;
    }
`;

const FilterIcn = styled.img`
    margin: 5px;
`;

const SectionTitle = styled.div`
    font-size: ${fontSize[20]};
    color: ${Colors.title};
    margin-left: 12px;
`;

const RightBar = styled.div`
    display: flex;
`;

const People : FC = () => {

    const [filtred, setFiltred] = useState("");

    try{
        return (
            <Content>
                <UsersList>  
                    <TopBar>
                        <SectionTitle>
                            People
                        </SectionTitle>

                        <RightBar>
                            <FilterBarDiv>
                                <FilterInput placeholder="Filter by name..." onChange={(event) => {setFiltred(event.target.value)}}/> 
                                <FilterIcn src={"/media/icons/search.svg"} />
                            </FilterBarDiv>
                        </RightBar>
                    </TopBar>

                    <PeopleList filterValue={filtred}/>
                </UsersList>
            </Content>
        );
    }
    catch{
        return <Loading/>
    }
        
}

export default People;