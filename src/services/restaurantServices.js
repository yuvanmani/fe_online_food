import instance from "./instance"

const restaurantServices = {
    getAllRestaurants: async () => {
        return await instance.get("/restaurants")
    }
}

export default restaurantServices