import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        name: "",
        email: "",
        password: "",
        street: "",
        city: "",
        state: "",
        pincode: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setStreet: (state, action) => {
            state.street = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setPincode: (state, action) => {
            state.pincode = action.payload;
        }
    }
})

export const { setName, setEmail, setPassword, setStreet, setCity, setState, setPincode } = registerSlice.actions;

export const selectName = (state) => state.register.name;
export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;
export const selectStreet = (state) => state.register.street;
export const selectCity = (state) => state.register.city;
export const selectState = (state) => state.register.state;
export const selectPincode = (state) => state.register.pincode;

export default registerSlice.reducer;