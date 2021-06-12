import {ChangeEvent, FC, useEffect, useState} from 'react';
import useDropdown from 'react-dropdown-hook';
import MenuElement from '../../../BasicPageElements/MenuElement';
import IMenuElement from "../../../../interfaces/IMenuElement"
import {PlatformData, WorkspacesData} from "../../../../assets/data/DropdownMenuData";
import Account from './ExpandedMenuAccount';
import {
	DropMenu,
	DropMenuBtn,
	DropMenuClosedBtn,
	Menu,
	List,
	Row,
	SearchBar,
	MenuSectionName,
	AccountSection
} from './ExpandedMenuStyled';

const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
	const [searched, setSearched] = useState("");
	const [currentPath, setCurrentPath] = useState("");

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

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, [])

	function getElementByPath(path : string){
		let CurrentElement;
		PlatformData.forEach((e) => {
			if(e.href === path){
				// eslint-disable-next-line react-hooks/exhaustive-deps
				CurrentElement = <MenuElement href={e.href} srcImg={"/media/icons/" + e.srcImg} elementName={e.elementName}/>
			}
		});
		WorkspacesData.forEach((e) => {
			if(e.href === path){
				// eslint-disable-next-line react-hooks/exhaustive-deps
				CurrentElement = <MenuElement href={e.href} srcImg={"/media/icons/" + e.srcImg} elementName={e.elementName}/>
			}
		});
		return CurrentElement;
	}

	return (
		<DropMenu>
			<div ref={wrapperRef}>

                <DropMenuClosedBtn onClick={toggleDropdown}>
					{getElementByPath(currentPath)}
					<img src="/media/icons/arrow-down.svg" alt=""/>
                </DropMenuClosedBtn>

				{dropdownOpen &&
					<Menu onClick={closeDropdown}>
						<DropMenuBtn>
							{getElementByPath(currentPath)}
							<img src="/media/icons/arrow-down.svg" alt=""/>
						</DropMenuBtn>

						<SearchBar placeholder="Filter..." onChange={(e: ChangeEvent<HTMLInputElement>) => setSearched(e.target.value)}/>

						<List>
							{PlatformTitle}

							{PlatformDataBufor}
							
							{WorkspacesTitle}
							
							{WorkspacesDataBufor}
						</List>

						<AccountSection>
							<MenuSectionName>Account</MenuSectionName>

							<ul>
								<Row>
									<Account/>
								</Row>
								<Row>
									<MenuElement href="/" srcImg="/media/icons/privacy.svg" elementName="Privacy"/>
								</Row>
								<Row>
									<MenuElement href="/" srcImg="/media/icons/settings.svg" elementName="Settings"/>
								</Row>
							</ul>
						</AccountSection>
					</Menu> 
				}
			</div>
		</DropMenu>
	)
}

export default ExpandedMenu;