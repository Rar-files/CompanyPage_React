import {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";

const Content = styled.div`
    float: right;
    margin: 4px;
    margin-right: 20px;
`;

const HomeButton = styled.button`
    padding: 8px;
    width: 40px;
    height: auto;
    border-width: 0px;
    margin: 1px;
    background: none;
    cursor: pointer;
`;

const CircleButton = styled(HomeButton)`
    border-radius: 50%;
    background-color: ${Colors.lightGrey};
`;

const RightManager: FC = () => {
    return(
        <Content>
            <Link to="/">
                <HomeButton>
                    <img src="./media/icons/house.svg" alt=""/>
                </HomeButton>
            </Link>

            <Link to="/">
                <CircleButton>
                    <img src="./media/icons/comments.svg" alt=""/>
                </CircleButton>
            </Link>

            <Link to="/">
                <CircleButton>
                    <img src="./media/icons/bell.svg" alt=""/>
                </CircleButton>
            </Link>
        </Content>
    )
}

export default RightManager;