import orderServices from "../../services/orderServices";

const allOrderLoader = async () => {
    try {
        const response = await orderServices.getAllOrders();
        return response.data;
    }
    catch (error) {
        return [];
    }
}

export default allOrderLoader