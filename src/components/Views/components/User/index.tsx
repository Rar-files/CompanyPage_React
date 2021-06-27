import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IState } from "../../../../reducers";
import { IPhotoReducers } from "../../../../reducers/photoReducers";
import { IUserReducers } from "../../../../reducers/userReducers";
import { Colors } from "../../../../styledHelpers/Colors";
import { fontSize } from "../../../../styledHelpers/FontSizes";

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserDiv = styled.div`
    height: 260px;
    width: 500px;
    display: flex;
    margin: 2px;
    background-color: ${Colors.white};
    box-shadow: 2px 2px 6px lightgray;
    display: flex;
    flex-direction: column;
`;

const TopBar = styled.div`
    margin: 4px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const PersonIcn = styled.img`
    margin: 4px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const Title = styled.div`
    width: 132px;
    margin: 4px;
    text-transform:capitalize;
    font-size: ${fontSize[24]};
    color: ${Colors.textAccent};
`;

const PersonData = styled.div`
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PersonDataElement = styled.div`
margin: 4px;
    width: 100%;
    font-size: ${fontSize[14]};
    display: flex;
`;

const PersonDataTitle = styled.div`
    margin: 0px 4px;
    color: ${Colors.text};
    font-weight: bold;
`;

const SeperatorLine = styled.div`
    margin: 0px 4px;
    border-top-width:1px;
    border-top-style: solid;
    border-color: ${Colors.comment};
`;

const PersonDataValue = styled.div`
    color: ${Colors.textAccent};
`;

const User : FC = () => {

    const {usersList} = useSelector<IState, IUserReducers>(state => ({
        ...state.users
    }))

    const {photosList} = useSelector<IState, IPhotoReducers>(state => ({
        ...state.photos
    }))
    
    let { id } = useParams<{ id: string }>();

    const currentUser = usersList[+id];

    return (
        <Content>
            <UserDiv>
                <TopBar>
                    <PersonIcn src={photosList[currentUser.id].url}/>
                    <Title>
                            {currentUser.name}
                    </Title>
                </TopBar>

                <SeperatorLine/>

                <PersonData>
                    <PersonDataElement>
                        <PersonDataTitle>
                            Addres:
                        </PersonDataTitle>

                        <PersonDataValue>
                            {`${currentUser.address.street} `}
                            {currentUser.address.suite}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            City:
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.address.city}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            Zipcode:
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.address.zipcode}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            Email: 
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.email}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            Phone:
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.phone}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            Website: 
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.website}
                        </PersonDataValue>
                    </PersonDataElement>
                    
                    <PersonDataElement>
                        <PersonDataTitle>
                            Company:
                        </PersonDataTitle>

                        <PersonDataValue>
                            {currentUser.company.name}
                        </PersonDataValue>
                    </PersonDataElement>
                </PersonData>
            </UserDiv>
        </Content>
    );
}

export default User;