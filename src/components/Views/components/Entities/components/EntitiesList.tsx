import { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import IPost from "../../../../../interfaces/IPost";
import { IState } from "../../../../../reducers";
import { IPostReducers } from "../../../../../reducers/postReducers";
import { Colors } from "../../../../../styledHelpers/Colors";
import Loading from "../../../../Common/Loading";

import Entitie from './Entitie';

interface IEntitiesList {
    filterValue: string;
}

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Entities = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const NavigateMenu = styled.div`
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${Colors.comment};
`;

const NavigateBtn = styled.div`
    margin: 2px;
    cursor: pointer;
    color: ${Colors.textAccent};
`;

const PagesNumber = styled.div`
    margin: 2px;
    display: flex;
    cursor: pointer;
`;

const TargetPage = styled.div`
    margin: 0px 0px 0px 3px;
    cursor: pointer;
    color: ${Colors.textAccent};
`;

const EntitiesList : FC<IEntitiesList> = (props: IEntitiesList) => {
    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    let list = postsList.filter((element: IPost) => element.title.toLowerCase().includes(props.filterValue.toLowerCase()));
    let postsOnSite : number;

    const { innerWidth: width} = window;

    const entitieInWidth = Math.floor((width - 300)/210);
    let postsOnOneView = entitieInWidth * 5;
    postsOnOneView = postsOnOneView - postsOnOneView%entitieInWidth

    if(currentPageIndex >= Math.round(list.length/postsOnOneView))
    {
        postsOnSite = (list.length%postsOnOneView)+6;
        if(currentPageIndex > Math.round(list.length/postsOnOneView))
            setCurrentPageIndex(Math.round(list.length/postsOnOneView)-1);
    }
    else
        postsOnSite = postsOnOneView;

    try{
        return(     
            <Content>
                <Entities>
                    {list.slice(currentPageIndex*postsOnOneView, currentPageIndex*postsOnOneView+postsOnSite)
                        .map((post: IPost) => <Entitie post={post} key={post.id}/>)}
                </Entities>

                <NavigateMenu>
                    {0< currentPageIndex &&
                        <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex-1)}>
                            Previous
                        </NavigateBtn>
                    }
                    <PagesNumber>
                        {0< currentPageIndex && `...${currentPageIndex},`}
                        <TargetPage>
                            {currentPageIndex+1}
                        </TargetPage>
                        {(list.length/postsOnOneView)-2 > currentPageIndex && `, ${currentPageIndex+2}...`}
                    </PagesNumber>
                    {(list.length/postsOnOneView)-2 > currentPageIndex &&
                        <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex+1)}>
                            Next
                        </NavigateBtn>
                    }
                </NavigateMenu>
            </Content>
        )
    }
    catch{
        return <Loading/>
    }
}

export default EntitiesList;