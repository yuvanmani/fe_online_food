import menuItemServices from "../../services/menuItemServices";

const menuItemLoader = async () => {
    try {
        const response = await menuItemServices.getAllMenuItems();
        return response.data;
    }
    catch (error) {
        return [];
    }
}

export default menuItemLoader