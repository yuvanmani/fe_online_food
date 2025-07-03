import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router";
import { selectOrderItem, setOrderItems } from "../redux/features/orderItems/orderItemSlice";
import { useEffect } from "react";
import { selectMenuId, selectQuantity, setMenuId, setQuantity } from "../redux/features/orders/createOrderSlice";
import orderServices from "../services/orderServices"
import { toast } from "react-toastify";

const orderItem = () => {

  const menuId = useSelector(selectMenuId);

  const quantity = useSelector(selectQuantity);

  const orderItemsFromLoader = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderItems = useSelector(selectOrderItem);

  useEffect(() => {
    dispatch(setOrderItems(orderItemsFromLoader));
  }, [dispatch, orderItemsFromLoader])

  const handleOrder = (e) => {
    e.preventDefault();

    // handle the order logic here
    orderServices.createOrder({ menuId, quantity })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setMenuId(""));
        dispatch(setQuantity(""));

        // navigate to my orders page
        setTimeout(() => {
          navigate("/dashboard/myOrders")
        }, 500)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })

  }

  return (
    <div className="flex flex-wrap">

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">Menu Items</h1>
        <div className="space-y-4">
          {
            orderItems.map((orderItem) => (
              <div key={orderItem._id}
                className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-700">{orderItem.name}</p>
                  <p className="text-md font-semibold text-green-600">₹ {orderItem.price}</p>
                  <p className="text-md font-semibold text-gray-600">{orderItem.restaurantName}</p>
                  <p className="text-md font-semibold text-gray-600">Restaurant Id : {orderItem.restaurantId}</p>
                  <p className="text-md font-semibold text-gray-600 border-2 mt-1 px-2 py-1 rounded-md bg-green-300">Menu id : {orderItem._id}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="max-w-xs max-h-64 mx-auto p-4 border rounded mt-8">
        <h2 className="text-2xl mb-4 text-green-600 font-semibold">Create Order</h2>
        <form className="flex flex-col space-y-3" onSubmit={handleOrder}>
          <input type="text" name="id" placeholder="Enter Menu Id" className="border p-2 rounded"
            value={menuId} onChange={(e) => dispatch(setMenuId(e.target.value))}
          />
          <input type="number" name="quantity" placeholder="Enter Quantity" className="border p-2 rounded"
            value={quantity} onChange={(e) => dispatch(setQuantity(e.target.value))}
          />
          <button type="submit" className="bg-green-600 text-white p-2 font-semibold rounded hover:bg-green-700">Place Order</button>
        </form>
      </div>

    </div>
  )
}

export default orderItem