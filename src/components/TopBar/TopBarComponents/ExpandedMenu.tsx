import {FC, RefObject, useRef, createRef} from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";

import MenuElement from '../../BasicPageElements/MenuElement';

const DropMenuBtn = styled.button`
	margin: 10px;
	padding: 2px;
	width: 190px;
	background: none;
	border: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Dropmenu = styled.div`
	position: absolute;
	margin: 0px;
	margin-left: 55px;
	z-index: 1;
`;

const Menu = styled.div`
	background: ${Colors.white};
	border-style: solid;
	border-width: 1px;
	border-color: ${Colors.grey};
	border-radius: 4px;
	margin-top:335px;
`;

const List = styled.div`
	padding:10px;
`;

const Row = styled.li`
	margin: 4px;
`;

//  let current = MenuElement;

let CurrentElement =  <MenuElement srcImg="/media/icons/house2.svg" elementName="Home"/>;

const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	return (
		<Dropmenu>
			<div ref={wrapperRef}>
                <DropMenuBtn onClick={toggleDropdown}>
					{CurrentElement}
					<img src="/media/icons/arrow-down.svg"/>
                </DropMenuBtn>
				{dropdownOpen &&
					<Menu>
						<DropMenuBtn onClick={closeDropdown}>
							{CurrentElement}
							<img src="/media/icons/arrow-down.svg"/>
						</DropMenuBtn>
						<List>
							<ul>
								<Row>
									<MenuElement srcImg="/media/icons/house2.svg" elementName="Home"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/publications.svg" elementName="Publications"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/people.svg" elementName="People"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/entities2.svg" elementName="Entities"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/administration.svg" elementName="Administration"/>
								</Row>
							</ul>
							<ul>
								<Row>
									<MenuElement srcImg="/media/icons/house2.svg" elementName="Client Contract"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/house2.svg" elementName="Supplier Contract"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/entities.svg" elementName="Corporate"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/house2.svg" elementName="Grup Norms"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/house2.svg" elementName="Real estate contracts"/>
								</Row>
							</ul>
							<ul>
								<Row>
									<MenuElement srcImg="/media/icons/privacy.svg" elementName="Privacy"/>
								</Row>
								<Row>
									<MenuElement srcImg="/media/icons/settings.svg" elementName="Settings"/>
								</Row>
							</ul>
						</List>
					</Menu> 
				}
			</div>
		</Dropmenu>
	)
}

export default ExpandedMenu;
