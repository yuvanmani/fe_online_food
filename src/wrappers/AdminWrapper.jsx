import { Navigate, Outlet, useLoaderData } from "react-router"
import NavBar from "../components/NavBar"

const AdminWrapper = () => {

    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" />
    }

    if (user.role === "user") {
        return <Navigate to="/dashboard" />
    } else if (user.role === "manager") {
        return <Navigate to="/manager/dashboard" />
    }

    return (
        <>
            <NavBar
                user={user}
            />
            <Outlet />
        </>
    )
}

export default AdminWrapper