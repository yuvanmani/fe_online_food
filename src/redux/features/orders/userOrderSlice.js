import { createSlice } from "@reduxjs/toolkit";

export const userOrderSlice = createSlice({
    name: "userOrder",
    initialState: {
        userOrders: []
    },
    reducers: {
        setUserOrders: (state, action) => {
            state.userOrders = action.payload;
        }
    }
})

export const { setUserOrders } = userOrderSlice.actions;

export const selectUserOrder = (state) => state.userOrder.userOrders;

export default userOrderSlice.reducer;