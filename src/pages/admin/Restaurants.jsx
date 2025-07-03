import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router"
import { selectRestaurant, setRestaurants } from "../../redux/features/restaurants/restaurantSlice";
import { useEffect } from "react";

const Restaurants = () => {

    const restaurantsFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const restaurants = useSelector(selectRestaurant);

    useEffect(() => {
        dispatch(setRestaurants(restaurantsFromLoader));
    }, [dispatch, restaurantsFromLoader])

    return (
        <div>
            <div className="flex justify-end">
                <button className="bg-green-500 px-4 py-2 rounded-md text-md font-bold text-white m-2 mr-10 hover:bg-green-600">
                    <Link to="/admin/dashboard/createRestaurant">Create Restaurant</Link>
                </button>
            </div>
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Restaurants</h1>
                <div className="space-y-4">
                    {
                        restaurants.map((restaurant) => (
                            <div key={restaurant._id}
                                className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-bold text-green-500">{restaurant.name}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.email}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.role}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Restaurant id : {restaurant._id}</p>
                                    <p className="text-md font-bold text-gray-600 mt-1 underline">Address :</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.location.street}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.location.city}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.location.state}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.location.pincode}</p>
                                    <p className="text-md font-bold text-gray-600 mt-1 underline">Cuisine Type :</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.cuisineType[0]}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">{restaurant.cuisineType[1]}</p>
                                    <p className="text-md font-bold text-gray-600 mt-1 underline">Working Hours :</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Monday : Open - {restaurant.hours.monday.open} , Close - {restaurant.hours.monday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Tuesday : Open - {restaurant.hours.tuesday.open} , Close - {restaurant.hours.tuesday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Wednesday : Open - {restaurant.hours.wednesday.open} , Close - {restaurant.hours.wednesday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Thursday : Open - {restaurant.hours.thursday.open} , Close - {restaurant.hours.thursday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Friday : Open - {restaurant.hours.friday.open} , Close - {restaurant.hours.friday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Saturday : Open - {restaurant.hours.saturday.open} , Close - {restaurant.hours.saturday.close}</p>
                                    <p className="text-md font-semibold text-gray-600 mt-1">Sunday : Open - {restaurant.hours.sunday.open} , Close - {restaurant.hours.sunday.close}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Restaurants