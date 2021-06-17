import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../../styledHelpers/Colors";

import Posts from './ResumeYourWorkPosts';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResumeYourWorkTopBar = styled.div`
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
    font-weight: bold;
    color: ${Colors.title};
    margin-left: 12px;
`;

const ResumeYourWork : FC = () => {


    const [filtred, setFiltred] = useState("");

    return (
        <Content>

            <ResumeYourWorkTopBar>

                <SectionTitle>
                    Resume your work
                </SectionTitle>

                <FilterBarDiv>
                    <FilterInput placeholder="Filter by title..." onChange={(event) => {setFiltred(event.target.value)}}/> 
                    <FilterIcn src={"/media/icons/search.svg"} />
                </FilterBarDiv>


            </ResumeYourWorkTopBar>

            <Posts filterValue={filtred}/>

        </Content>
    );
}

export default ResumeYourWork;