import instance from "./instance"

const userServices = {
    getAllUsers: async () => {
        return await instance.get("/users")
    }
}

export default userServices