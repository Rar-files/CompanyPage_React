import { FC, useState } from "react";
import useDropdown from 'react-dropdown-hook';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";
import { Colors } from "../../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../../styledHelpers/FontSizes";
import Loading from "../../../../../Common/Loading";

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
    font-size: ${fontSize[20]};
    color: ${Colors.title};
    margin-left: 12px;
`;

const RightBar = styled.div`
    display: flex;
`;

const DropMenu = styled.div`
	display: flex;
    align-items: center;
`;

const DropMenuBtn = styled.button`
	background: none;
    color: ${Colors.textAccent};
    display: flex;
    align-items: center;
    border-width: 0px;
    cursor: pointer;
`;

const DropMenuIcn = styled.img`
    margin: 2px 4px;
`;

export const Menu = styled.div`
    position: absolute;
	background: ${Colors.white};
    margin: 2px;
    width: 100px;
    height: 200px;
    z-index: 1;
    border-radius: 0px 0px 4px 4px;
    border-width: 1px;
    border-color: ${Colors.accent};
    border-style: solid;
`;

const ResumeYourWork : FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    const [filtred, setFiltred] = useState("");

    if(postsList.length === 0)
    return (
        <Loading/>
    )

    return (
        <Content>

            <ResumeYourWorkTopBar>

                <SectionTitle>
                    Resume your work
                </SectionTitle>

                <RightBar>
                    <FilterBarDiv>
                        <FilterInput placeholder="Filter by title..." onChange={(event) => {setFiltred(event.target.value)}}/> 
                        <FilterIcn src={"/media/icons/search.svg"} />
                    </FilterBarDiv>
                    <DropMenu>
                        <div ref={wrapperRef}>

                            <DropMenuBtn onClick={toggleDropdown}>
                                <DropMenuIcn src="/media/icons/cog.svg"></DropMenuIcn>
                                Followed
                                <DropMenuIcn src="/media/icons/arrow-down.svg" alt=""/>
                            </DropMenuBtn>

                            {dropdownOpen &&
                                <Menu>
                                    
                                </Menu> 
                            }
                        </div>
                    </DropMenu>
                </RightBar>

            </ResumeYourWorkTopBar>

            <Posts filterValue={filtred}/>

        </Content>
    );
}

export default ResumeYourWork;