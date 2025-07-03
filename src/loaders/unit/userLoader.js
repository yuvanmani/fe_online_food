import userServices from "../../services/userServices"
const userLoader = async () => {
    try {
        const response = await userServices.getAllUsers();
        return response.data;
    }
    catch (error) {
        return [];
    }
}

export default userLoader