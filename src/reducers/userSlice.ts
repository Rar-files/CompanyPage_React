import { 
    createSlice, 
    createAsyncThunk,  
    Slice 
} from "@reduxjs/toolkit";
import API from "../assets/API/API";

interface UserState {
    user: object
  }
  
  const initialState: UserState = {
    user: {}
  }

export const fetchUserByID = createAsyncThunk(
    "user/fetchByID",
    async (ID : number) => {
        const res =  await API.user.fetchByID(ID);
        const user = await res.json()
        return user
    }, 
)

export const fetchAllUsers = createAsyncThunk(
    "user/fetchAll",
    async () => {
        const res =  await API.user.fetchAll();
        const users = await res.json()
        return users
    }, 
)

export const userSlice: Slice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUserByID.fulfilled.toString()]: (state, action) => {
            state.user = action.payload
        },
        [fetchAllUsers.fulfilled.toString()]: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer;