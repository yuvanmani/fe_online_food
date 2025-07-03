import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice"
import verifyReducer from "../features/auth/verifySlice"
import loginReducer from "../features/auth/loginSlice"
import menuItemReducer from "../features/menuItems/menuItemSlice"
import meReducer from "../features/auth/meSlice"
import orderItemReducer from "../features/orderItems/orderItemSlice"
import userReducer from "../features/users/userSlice"
import restaurantReducer from "../features/restaurants/restaurantSlice"
import createOrderReducer from "../features/orders/createOrderSlice"
import userOrderReducer from "../features/orders/userOrderSlice"
import allOrderReducer from "../features/orders/AllOrderSlice"

const store = configureStore({
    reducer: {
        register: registerReducer,
        verify: verifyReducer,
        login: loginReducer,
        menuItem: menuItemReducer,
        me: meReducer,
        orderItem: orderItemReducer,
        user: userReducer,
        restaurant: restaurantReducer,
        createOrder: createOrderReducer,
        userOrder: userOrderReducer,
        allOrder: allOrderReducer
    }
})

export default store