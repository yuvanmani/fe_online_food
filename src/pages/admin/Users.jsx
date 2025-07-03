import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router"
import { selectUser, setUsers } from "../../redux/features/users/userSlice";
import { useEffect } from "react";

const Users = () => {

    const usersFromLoader = useLoaderData();

    const dispatch = useDispatch();

    const users = useSelector(selectUser);

    useEffect(() => {
        dispatch(setUsers(usersFromLoader));
    }, [dispatch, usersFromLoader])

    return (
         <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">Users</h1>
            <div className="space-y-4">
                {
                    users.map((user) => (
                        <div key={user._id}
                            className="p-4 bg-white shadow-sm rounded-md border border-gray-200 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-bold text-green-500">{user.name}</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.email}</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.role}</p>
                                 <p className="text-md font-semibold text-gray-600 mt-1">User id : {user._id}</p>
                                <p className="text-md font-bold text-gray-600 mt-1 underline">Address :</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.address.street}</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.address.city}</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.address.state}</p>
                                <p className="text-md font-semibold text-gray-600 mt-1">{user.address.pincode}</p> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Users