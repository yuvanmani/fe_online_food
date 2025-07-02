import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice"
import verifyReducer from "../features/auth/verifySlice"
import loginReducer from "../features/auth/loginSlice"

const store = configureStore({
    reducer: {
        register: registerReducer,
        verify: verifyReducer,
        login: loginReducer
    }
})

export default store