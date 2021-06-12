import IPost from "../interfaces/IPost";
import * as actionTypes from "../app/actions/actionTypes/postTypes"

export interface IPostReducers{
    postsList: IPost[]
}

const initialState = () :IPostReducers => ({
    postsList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action: any) => {
    switch(action.type){

        case actionTypes.GET_POSTS: {
            const data: actionTypes.IPostTypes['GET_POSTS'] = action;

            return{
                ...state,
                postsList: data.postsList
            }
        }

        default: {
            return state;
        }
    }
}