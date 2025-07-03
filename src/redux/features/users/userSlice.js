import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const {setUsers} = userSlice.actions;

export const selectUser = (state) => state.user.users;

export default userSlice.reducer;