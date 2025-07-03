import { useLoaderData } from "react-router"

const UserProfile = () => {

    const user = useLoaderData();

  return (
    <div className="max-w-xl mx-auto px-6 py-2 border-2 rounded-lg border-green-500 m-4">
        <p className="text-xl font-bold text-green-500 my-1">{user.name}</p>
        <p className="text-lg text-gray-800 my-1">{user.email}</p>
        <p className="text-lg text-gray-800 my-1">{user.role}</p>
         <p className="text-lg text-gray-800 my-1">Id : {user._id}</p>
        <p className="text-md font-semibold text-gray-600 mt-1 underline">Address :</p>
        <p className="text-lg text-gray-800 my-1">{user.address.street}</p>
        <p className="text-lg text-gray-800 my-1">{user.address.city}</p>
        <p className="text-lg text-gray-800 my-1">{user.address.state}</p>
        <p className="text-lg text-gray-800 my-1">{user.address.pincode}</p>
    </div>
  )
}

export default UserProfile