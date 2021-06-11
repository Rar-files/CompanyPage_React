import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../reducers/photoSlice";
import postsSlice from "../reducers/postsSlice";
import userSlice from "../reducers/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsSlice,
        photo: photoSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store