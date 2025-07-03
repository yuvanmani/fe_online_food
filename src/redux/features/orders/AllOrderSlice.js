import { createSlice } from "@reduxjs/toolkit";

export const allOrderSlice = createSlice({
    name: "allOrder",
    initialState: {
        allOrders: []
    },
    reducers: {
        setAllOrders: (state, action) => {
            state.allOrders = action.payload;
        }
    }
})

export const { setAllOrders } = allOrderSlice.actions;

export const selectAllOrder = (state) => state.allOrder.allOrders;

export default allOrderSlice.reducer;