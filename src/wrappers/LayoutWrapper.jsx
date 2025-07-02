import { Navigate, Outlet, useLoaderData } from "react-router"
import NavBar from "../components/Navbar"

const LayoutWrapper = () => {

  const user = useLoaderData();

  if (user) {
    if (user.role = "admin") {
      return <Navigate to="/admin/dashboard" />
    } else if (user.role = "manager") {
      return <Navigate to="/manager/dashboard" />
    } else if (user.role = "user") {
      return <Navigate to="/dashboard" />
    }
  }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default LayoutWrapper