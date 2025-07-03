import { useLoaderData } from "react-router"

const AdminDashboard = () => {

  const user = useLoaderData();

  return (
   <div className="max-w-xl mx-auto px-6 py-2 border-double border-4 rounded-lg border-green-500 m-4">
      <p className="text-2xl font-semibold text-gray-600">Hi, <span className="text-green-600">{user.name}</span></p>
      <p className="text-lg text-gray-800 my-1">Welcome to your dashboard!!</p>
      <p className="text-lg text-gray-800 my-1">Here you can find & manage the users and restaurants</p>
    </div>
  )
}

export default AdminDashboard