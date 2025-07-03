import instance from "./instance"

const orderItemServices = {
    getAllOrderItems : async () => {
        return await instance.get("/menuItems")
    }
}

export default orderItemServices