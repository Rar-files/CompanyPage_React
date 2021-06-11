import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import API from "../assets/API/API";

interface PostsState {
    posts: object
  }
  
  const initialState: PostsState = {
    posts: {}
  }

export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAll",
    async () => {
        const res = await API.posts.fetchAll();
        const posts = res.json();
        return posts;
    }
)

export const postsSlice: Slice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchAllPosts.fulfilled.toString()] : (state, action) => {
            state.posts = action.payload
        }
    }
})

export default postsSlice.reducer;