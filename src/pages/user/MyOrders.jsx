import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router"
import { selectUserOrder, setUserOrders } from "../../redux/features/orders/userOrderSlice";
import { useEffect } from "react";

const MyOrders = () => {

    const ordersFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const orders = useSelector(selectUserOrder);

    useEffect(() => {
        dispatch(setUserOrders(ordersFromLoader));
    }, [dispatch, ordersFromLoader])

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">Orders</h1>
            <div className="space-y-4">
                {
                    orders.map((order) => (
                        <div key={order._id}
                            className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold text-gray-600">{order.menuItemName} - {order.quantity}</p>
                                <p className="text-md font-semibold text-gray-700">{order.restaurantName}</p>
                                <p className="text-md font-semibold text-gray-600">Restaurant Id : {order.restaurantId}</p>
                                <p className="text-lg font-semibold text-green-600">₹ {order.totalAmount}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyOrders