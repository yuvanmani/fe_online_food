import orderServices from "../../services/orderServices";

const orderLoader = async () => {
    try {
        const response = await orderServices.getOrdersByUserId();
        return response.data;
    }
    catch (error) {
        return [];
    }
}

export default orderLoader