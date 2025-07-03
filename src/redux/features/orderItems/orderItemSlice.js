import { createSlice } from "@reduxjs/toolkit";

export const orderItemSlice = createSlice({
    name: "orderItem",
    initialState: {
        orderItems: []
    },
    reducers: {
        setOrderItems: (state, action) => {
            state.orderItems = action.payload;
        }
    }
})

export const { setOrderItems } = orderItemSlice.actions;

export const selectOrderItem = (state) => state.orderItem.orderItems;

export default orderItemSlice.reducer;