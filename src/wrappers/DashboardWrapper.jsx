import { Navigate, Outlet, useLoaderData } from "react-router"
import NavBar from "../components/Navbar"

const DashboardWrapper = () => {

    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" />
    }

    if (user.role === "admin") {
        return <Navigate to="/admin/dashboard" />
    } else if (user.role === "manager") {
        return <Navigate to="/manager/dashboard" />
    }

    return (
        <>
            <NavBar
                user={user} />
            <Outlet />
        </>
    )
}

export default DashboardWrapper