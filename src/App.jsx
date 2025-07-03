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
import MenuItem from "./pages/MenuItem"
import menuItemLoader from "./loaders/unit/menuItemLoader"
import OrderItem from "./components/OrderItem"
import orderItemLoader from "./loaders/unit/orderItemLoader"
import UserProfile from "./components/UserProfile"
import Users from "./pages/admin/Users"
import userLoader from "./loaders/unit/userLoader"
import Restaurants from "./pages/admin/Restaurants"
import restaurantLoader from "./loaders/unit/restaurantLoader"
import NewRestaurant from "./pages/admin/NewRestaurant"
import MyOrders from "./pages/user/MyOrders"
import orderLoader from "./loaders/unit/orderLoader"
import AllOrder from "./pages/manager/AllOrder"
import allOrderLoader from "./loaders/unit/allOrderLoader"

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
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
      },
      {
        path: "menuItems",
        element: <MenuItem />,
        loader: menuItemLoader,
        hydrateFallbackElement: <div>Loading menu items...</div>
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
        element: <UserDashboard />,
        loader: authLoader,
        hydrateFallbackElement: <div>Loading Dashboard...</div>
      },
      {
        path: "profile",
        element: <UserProfile />,
        loader: authLoader,
        hydrateFallbackElement: <div>Loading Profile...</div>
      },
      {
        path: "orderItems",
        element: <OrderItem />,
        loader: orderItemLoader,
        hydrateFallbackElement: <div>Loading Menu Items...</div>
      },
      {
        path: "myOrders",
        element: <MyOrders />,
        loader: orderLoader,
        hydrateFallbackElement: <div>Loading Orders...</div>
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
        element: <AdminDashboard />,
        loader: authLoader,
        hydrateFallbackElement: <div>Loading Dashboard...</div>
      },
      {
        path: "manageUsers",
        element: <Users />,
        loader: userLoader,
        hydrateFallbackElement: <div>Loading Users...</div>
      },
      {
        path: "manageRestaurants",
        element: <Restaurants />,
        loader: restaurantLoader,
        hydrateFallbackElement: <div>Loading Restaurants...</div>
      },
      {
        path: "createRestaurant",
        element: <NewRestaurant />
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
        element: <ManagerDashboard />,
        loader: authLoader,
        hydrateFallbackElement: <div>Loading Dashboard...</div>
      },
      {
        path: "profile",
        element: <UserProfile />,
        loader: authLoader,
        hydrateFallbackElement: <div>Loading Profile...</div>
      },
      {
        path: "manageOrders",
        element: <AllOrder />,
        loader: allOrderLoader,
        hydrateFallbackElement: <div>Loading All Orders...</div>
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