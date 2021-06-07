import {ChangeEvent, FC, useState, useContext,} from 'react';
import useDropdown from 'react-dropdown-hook';
import MenuElement from '../../BasicPageElements/MenuElement';
import IMenuElement from "../../../interfaces/MenuElement.interface"
import {PlatformData, WorkspacesData} from "../../../assets/data/DropdownMenuData";

import {
	DropMenu,
	DropMenuBtn,
	DropMenuClosedBtn,
	Menu,
	List,
	Row,
	SearchBar,
	MenuSectionName
} from './styledComponents/ExpandedMenuStyled';
import { platform } from 'node:os';
import { element } from 'prop-types';

const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	const [searched, setSearched] = useState("");

	let CurrentElement = <MenuElement href="/" srcImg="/media/icons/house2.svg" elementName="Home"/>;
	PlatformData.forEach((e) => {
		if(e.href === window.location.pathname)
			CurrentElement = <MenuElement href={e.href} srcImg={"/media/icons/" + e.srcImg} elementName={e.elementName}/>
	});

	let PlatformDataBufor = PlatformData.filter((element: IMenuElement) => element.elementName.toLowerCase().includes(searched.toLowerCase()))
	.map((e: IMenuElement) => <MenuElement href={e.href} srcImg={"/media/icons/" + e.srcImg} elementName={e.elementName}/>);

	let WorkspacesDataBufor = WorkspacesData.filter((element: IMenuElement) => element.elementName.toLowerCase().includes(searched.toLowerCase()))
		.map((e: IMenuElement) => <MenuElement href={e.href} srcImg={"/media/icons/" + e.srcImg} elementName={e.elementName}/>);

	let PlatformTitle;
	if(!(PlatformDataBufor.length === 0))
		PlatformTitle = <MenuSectionName>Platform</MenuSectionName>;


	let WorkspacesTitle;
	if(!(WorkspacesDataBufor.length === 0))
		WorkspacesTitle = <MenuSectionName>Workspaces</MenuSectionName>;

	return (
		<DropMenu>
			<div ref={wrapperRef}>

                <DropMenuClosedBtn onClick={toggleDropdown}>
					{CurrentElement}
					<img src="/media/icons/arrow-down.svg" alt=""/>
                </DropMenuClosedBtn>

				{dropdownOpen &&
					<Menu>
						<DropMenuBtn onClick={closeDropdown}>
							{CurrentElement}
							<img src="/media/icons/arrow-down.svg" alt=""/>
						</DropMenuBtn>

						<SearchBar placeholder="Search" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearched(e.target.value)}/>

						<List>
							{PlatformTitle}

							{PlatformDataBufor}
							
							{WorkspacesTitle}
							
							{WorkspacesDataBufor}
							
							<MenuSectionName>Account</MenuSectionName>

							<ul>
								<Row>
									<MenuElement href="/" srcImg="/media/icons/privacy.svg" elementName="Privacy"/>
								</Row>
								<Row>
									<MenuElement href="/" srcImg="/media/icons/settings.svg" elementName="Settings"/>
								</Row>
							</ul>
						</List>
					</Menu> 
				}
			</div>
		</DropMenu>
	)
}

export default ExpandedMenu;