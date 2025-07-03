import { createSlice } from "@reduxjs/toolkit";

export const meSlice = createSlice({
    name: "profile",
    initialState: {
        me: []
    },
    reducers: {
        setMe: (state, action) => {
            state.me = action.payload;
        }
    }
})

export const { setMe } = meSlice.actions;

export const selectMe = (state) => state.profile.me;

export default meSlice.reducer