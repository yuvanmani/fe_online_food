import instance from "./instance"

const authServices = {
    register: async (userData) => {
        return await instance.post("/auth/register", userData)
    },
    verify: async (userData) => {
        return await instance.post("/auth/verifyotp", userData)
    },
    login: async (userData) => {
        return await instance.post("/auth/login", userData)
    },
    me: async () => {
        return await instance.get("/auth/me")
    },
    logout: async () => {
        return await instance.post("/auth/logout")
    }
}

export default authServices