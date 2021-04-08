import {FC} from 'react';
import styled from 'styled-components';

import {Colors} from "../../../styledHelpers/Colors";

const SearchBarDiv = styled.label`
    vertical-align: center;
    width: 500px;
    height: 30px;
    border-color: ${Colors.grey};
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchInput = styled.input`
    border: none;
    width: 100%;
    height: 28px;
    text-align:center;
    &:focus {
        outline:none!important;
    }
`;

const SearchIcn = styled.img`
    margin: 5px;
`;

const SearchBar: FC = () => {
    return (
        <SearchBarDiv>
            <SearchInput placeholder="Search Legalcluster"/> 
            <SearchIcn src={"/media/icons/search.svg"} />
        </SearchBarDiv>
    )
}

export default SearchBar;