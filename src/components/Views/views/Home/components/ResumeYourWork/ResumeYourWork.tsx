import { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../../../../../reducers";
import { IPostReducers } from "../../../../../../reducers/postReducers";

import Posts from './ResumeYourWorkPosts';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResumeYourWorkTopBar = styled.div`
    display: flex;
`;

const InputFiltred = styled.input`

`;

const NavigateMenu = styled.div`
    display: flex;
`;

const NavigateBtn = styled.div`

`;

const ResumeYourWork : FC = () => {

    const {postsList} = useSelector<IState, IPostReducers>(state => ({
        ...state.posts
    }))

    const [filtred, setFiltred] = useState("");
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    return (
        <Content>

            <ResumeYourWorkTopBar>
                <InputFiltred onChange={(event : React.ChangeEvent<HTMLInputElement>) => setFiltred(event.target.value)}/>
            </ResumeYourWorkTopBar>

            <Posts filterValue={filtred} posts={{from: currentPageIndex*10,to: currentPageIndex*10+10}}/>

            <NavigateMenu>
                {0< currentPageIndex &&
                    <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex-1)}>
                        Prev
                    </NavigateBtn>}
                {(postsList.length/10)-2 > currentPageIndex &&
                    <NavigateBtn onClick={() => setCurrentPageIndex(currentPageIndex => currentPageIndex+1)}>
                        Next
                    </NavigateBtn>
                }
            </NavigateMenu>

        </Content>
    );
}

export default ResumeYourWork;