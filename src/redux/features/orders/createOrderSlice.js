import { createSlice } from "@reduxjs/toolkit";

export const createOrderSlice = createSlice({
    name: "createOrder",
    initialState: {
        menuId: "",
        quantity: ""
    },
    reducers: {
        setMenuId: (state, action) => {
            state.menuId = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        }
    }
})

export const { setMenuId, setQuantity } = createOrderSlice.actions;

export const selectMenuId = (state) => state.createOrder.menuId;

export const selectQuantity = (state) => state.createOrder.quantity;

export default createOrderSlice.reducer;