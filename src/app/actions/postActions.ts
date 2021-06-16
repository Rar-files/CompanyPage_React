import { Dispatch } from "redux";
import API from "../../assets/API/API";

import * as actionTypes from "./actionTypes/postTypes";
import IPost from "../../interfaces/IPost"

export const getPosts = (): Promise<IPost[]> => (async (dispatch: Dispatch) => {
    const response = await API.posts.fetchAll();
    const postsList = await response.json();
    dispatch({
        type: actionTypes.GET_POSTS,
        postsList
    })
}) as any;