import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurants: []
    },
    reducers: {
        setRestaurants: (state, action) => {
            state.restaurants = action.payload;
        }
    }
})

export const {setRestaurants} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurants;

export default restaurantSlice.reducer;