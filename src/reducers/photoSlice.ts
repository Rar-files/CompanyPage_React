import{
    createSlice,
    createAsyncThunk,
    Slice
} from "@reduxjs/toolkit";
import API from "../assets/API/API";

interface PostsState {
    photo: object
  }
  
  const initialState: PostsState = {
    photo: {}
  }

export const fetchPhotoByID = createAsyncThunk(
    "photo/fetchByID",
    async (ID : number) => {
        const res = await API.photo.fetchByID(ID);
        const photo = await res.json();
        return photo;
    }
)

export const photoSlice: Slice = createSlice({
    name: "photo",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchPhotoByID.fulfilled.toString()] : (state, action) => {
            state.photo = action.payload
        }
    }
})

export default photoSlice.reducer;