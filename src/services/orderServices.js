import instance from "./instance"

const orderServices = {
    createOrder: async (userData) => {
        return await instance.post("/orders", userData)
    },
    getOrdersByUserId: async () => {
        return await instance.get("/orders/ordersByUserId")
    },
    getAllOrders: async () => {
        return await instance.get("/orders")
    }
}

export default orderServices