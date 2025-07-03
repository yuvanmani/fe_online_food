import { createSlice } from "@reduxjs/toolkit";

export const menuItemSlice = createSlice({
    name: "menuItem",
    initialState: {
        menuItems: []
    },
    reducers: {
        setMenuItems: (state, action) => {
            state.menuItems = action.payload;
        }
    }
})

export const {setMenuItems} = menuItemSlice.actions;

export const selectMenuItem = (state) => state.menuItem.menuItems;

export default menuItemSlice.reducer;