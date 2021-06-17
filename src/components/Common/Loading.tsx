import { FC } from "react"
import styled, { keyframes } from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const LoadingElement = styled.div`
    width: 100%;
    height: 100%;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const bounced = keyframes`
    0%,80%,100%{
        transform: scale(0);
    }
    40%{
        transform: scale(1);
    }
`;

const Bounce = styled.div`
    width: 20px;
    height: 20px;
    margin: 2px;
    background-color: ${Colors.accent};
    display: inline-block;
    border-radius: 50%;
    animation-name: ${bounced};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;

const Bounce1 = styled(Bounce)`
    animation-delay: 0.15s;
`;

const Bounce2 = styled(Bounce1)`
    animation-delay: 0.30s;
`;

const Loading : FC = () => {
    return (
        <LoadingElement>
            <Bounce/>
            <Bounce1/>
            <Bounce2/>
        </LoadingElement>
    )
}

export default Loading;