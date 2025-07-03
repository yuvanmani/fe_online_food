import instance from "./instance"

const menuItemServices = {
    getAllMenuItems: async () => {
        return await instance.get("/menuItems")
    }
}

export default menuItemServices