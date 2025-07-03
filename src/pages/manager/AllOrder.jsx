import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router"
import { selectAllOrder, setAllOrders } from "../../redux/features/orders/AllOrderSlice";
import { useEffect } from "react";

const AllOrder = () => {

    const allOrdersFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const allOrders = useSelector(selectAllOrder);

    useEffect(() => {
        dispatch(setAllOrders(allOrdersFromLoader));
    }, [dispatch, allOrdersFromLoader])

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">All Orders</h1>
            <div className="space-y-4">
                {
                    allOrders.map((allOrder) => (
                        <div key={allOrder._id}
                            className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold text-gray-600">{allOrder.menuItemName} - {allOrder.quantity}</p>
                                <p className="text-md font-semibold text-gray-700">{allOrder.restaurantName}</p>
                                <p className="text-md font-semibold text-gray-600">Restaurant Id : {allOrder.restaurantId}</p>
                                <p className="text-lg font-semibold text-green-600">₹ {allOrder.totalAmount}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllOrder