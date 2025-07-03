import restaurantServices from "../../services/restaurantServices"
const restaurantLoader = async () => {
    try {
        const response = await restaurantServices.getAllRestaurants();
        return response.data;
    }
    catch (error) {
        return [];
    }
}

export default restaurantLoader