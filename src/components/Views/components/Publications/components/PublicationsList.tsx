/* eslint-disable eqeqeq */
import { FC, useState} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { WorkspacesData } from "../../../../../assets/data/PagesData"
import IPost from "../../../../../interfaces/IPost";
import { IState } from "../../../../../reducers";
import { IPostReducers } from "../../../../../reducers/postReducers";
import { Colors } from "../../../../../styledHelpers/Colors";

import Publication from './Publication';

interface IPublicationsList {
    filterValue: string;
}

const PostsDiv = styled.div`

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

const PublicationsList : FC<IPublicationsList> = (props: IPublicationsList) => {

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    let list = postsList.filter((element: IPost) => element.title.toLowerCase().includes(props.filterValue.toLowerCase()));
    let postsOnSite : number;

    if(currentPageIndex >= Math.round(list.length/10)-1)
    {
        postsOnSite = (list.length%10)+6;
        if(currentPageIndex > Math.round(list.length/10)-1)
            setCurrentPageIndex(Math.round(list.length/10)-1);
    }
    else
        postsOnSite = 10;

    return (

        <PostsDiv>
            {list.slice(currentPageIndex*10, currentPageIndex*10+postsOnSite)
                .map((post: IPost) => <Publication post={post} postType={WorkspacesData[post.id%5]} updateDate={new Date(2021,4,post.id%30+1)} companyName="Company" key={post.id}/>)}
            
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
                    {(list.length/10)-2 > currentPageIndex && `, ${currentPageIndex+2}...`}
                </PagesNumber>
                {(list.length/10)-2 > currentPageIndex &&
                    <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex+1)}>
                        Next
                    </NavigateBtn>
                }
            </NavigateMenu>
        </PostsDiv>
    );
    

}

export default PublicationsList;