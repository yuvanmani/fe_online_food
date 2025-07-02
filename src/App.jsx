import { createBrowserRouter, RouterProvider } from "react-router"
import LayoutWrapper from "./wrappers/LayoutWrapper"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Provider } from "react-redux"
import store from "./redux/app/store"
import VerifyPage from "./pages/VerifyPage"
import ToastProvider from "./components/ToastProvider"
import DashboardWrapper from "./wrappers/DashboardWrapper"
import authLoader from "./loaders/unit/authLoader"
import UserDashboard from "./pages/user/UserDashboard"
import Logout from "./components/Logout"
import AdminWrapper from "./wrappers/AdminWrapper"
import AdminDashboard from "./pages/admin/AdminDashboard"
import ManagerWrapper from "./wrappers/ManagerWrapper"
import ManagerDashboard from "./pages/manager/ManagerDashboard"

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "verifypage",
        element: <VerifyPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Dashboard...</div>,
    children: [
      {
        index: true,
        element: <UserDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Admin Dashboard...</div>,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  },
  {
    path: "/manager/dashboard",
    element: <ManagerWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading Manager Dashboard...</div>,
    children: [
      {
        index: true,
        element: <ManagerDashboard />
      },
      {
        path: "logout",
        element: <Logout />
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastProvider />
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }} />
      </Provider>
    </>
  )
}

export default App