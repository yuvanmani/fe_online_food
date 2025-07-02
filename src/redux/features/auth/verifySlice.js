import { createSlice } from "@reduxjs/toolkit";

export const verifySlice = createSlice({
    name: "verify",
    initialState: {
        email: "",
        otp: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setOtp: (state, action) => {
            state.otp = action.payload;
        }
    }
})

export const { setEmail, setOtp } = verifySlice.actions;

export const selectEmail = (state) => state.verify.email;
export const selectOtp = (state) => state.verify.otp;

export default verifySlice.reducer;