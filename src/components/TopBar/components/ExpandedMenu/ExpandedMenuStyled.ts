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
	margin-top:433px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 520px;
`;

export const SearchBar = styled.input`
	width: 90%;
	margin: 0px 5px;
`;

export const List = styled.div`
	padding:10px;
	overflow: auto;
`;

export const Row = styled.li`
	margin: 4px;
`;

export const MenuSectionName = styled.span`

`;

export const AccountSection = styled.div`
	padding:10px;
`;