import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";

export const DropMenu = styled.div`
	position: absolute;
	margin: 0px;
	margin-left: 55px;
	z-index: 1;
`;

export const DropMenuBtn = styled.button`
	margin: 5px;
	padding: 2px;
	width: 170px;
	background: none;
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export const DropMenuClosedBtn = styled(DropMenuBtn)`
	margin-left: 6px;
`;

export const Menu = styled.div`
	background: ${Colors.white};
	border-style: solid;
	border-width: 1px;
	border-color: ${Colors.grey};
	border-radius: 4px;
	margin-top:415px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const List = styled.div`
	padding:10px;
`;

export const Row = styled.li`
	margin: 4px;
`;

export const SearchBar = styled.input`
	width: 90%;
`;

export const MenuSectionName = styled.span`

`;