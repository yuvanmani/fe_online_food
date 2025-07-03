import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router"
import { setMenuItems, selectMenuItem } from "../redux/features/menuItems/menuItemSlice"

const MenuItem = () => {

    const menuItemsFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const menuItems = useSelector(selectMenuItem);

    useEffect(() => {
        dispatch(setMenuItems(menuItemsFromLoader));
    }, [dispatch, menuItemsFromLoader])

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">Menu Items</h1>
            <div className="text-md font-semibold text-white mb-3 bg-green-500 px-3 py-1 border-2 rounded-md max-w-36 hover:cursor-pointer">
                <Link to="/login">Login to order</Link>
            </div>
            <div className="space-y-4">
                {
                    menuItems.map((menuItem) => (
                        <div key={menuItem._id}
                            className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold text-gray-700">{menuItem.name}</p>
                                <p className="text-md font-semibold text-green-600">₹ {menuItem.price}</p>
                                <p className="text-md font-semibold text-gray-600">{menuItem.restaurantName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuItem