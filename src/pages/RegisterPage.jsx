import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"
import { selectCity, selectEmail, selectName, selectPassword, selectPincode, selectState, selectStreet, setCity, setEmail, setName, setPassword, setPincode, setState, setStreet } from "../redux/features/auth/registerSlice"
import authServices from "../services/authServices";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const street = useSelector(selectStreet);
    const city = useSelector(selectCity);
    const state = useSelector(selectState);
    const pincode = useSelector(selectPincode);
    const [role, setRole] = useState("user");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // handle register logic here
        authServices.register({ name, email, password, role, street, city, state, pincode })
            .then((response) => {
                toast.success(response.data.message);

                // clear the form
                dispatch(setName(""));
                dispatch(setEmail(""));
                dispatch(setPassword(""));
                dispatch(setStreet(""));
                dispatch(setCity(""));
                dispatch(setState(""));
                dispatch(setPincode(""));
                setRole("user");

                // redirect to OTP verification page
                setTimeout(() => {
                    navigate("/verifypage");
                }, 500)
            })
            .catch((error) => {
                toast.error(error.response.data.message)
            })
    }

    return (
        <div className="max-w-xs mx-auto mt-6 p-4 border rounded">
            <h2 className="text-2xl mb-4 text-green-600 font-semibold">User Registration</h2>
            <form className="flex flex-col space-y-3" onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Enter name" className="border p-2 rounded"
                    value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                <input type="email" name="email" placeholder="Enter email" className="border p-2 rounded"
                    value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <input type="password" name="password" placeholder="Enter password" className="border p-2 rounded"
                    value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                <label htmlFor="role" className="px-2 rounded underline font-semibold">Role :</label>
                <select id="role" className="border p-2 rounded mb-2" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option>user</option>
                    <option>manager</option>
                    <option>admin</option>
                </select>
                <label htmlFor="address" className="px-2 rounded underline font-semibold">Address :</label>
                <input type="text" name="street" placeholder="Street" className="border p-2 rounded"
                    value={street} onChange={(e) => dispatch(setStreet(e.target.value))} />
                <input type="text" name="city" placeholder="City" className="border p-2 rounded"
                    value={city} onChange={(e) => dispatch(setCity(e.target.value))} />
                <input type="text" name="state" placeholder="State" className="border p-2 rounded"
                    value={state} onChange={(e) => dispatch(setState(e.target.value))} />
                <input type="text" name="pincode" placeholder="Pincode" className="border p-2 rounded"
                    value={pincode} onChange={(e) => dispatch(setPincode(e.target.value))} />
                <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
                <p className="text-gray-700 text-md font-semibold">Already have an account? <Link to="/login"><span className="text-green-600 text-md font-bold">Login here</span></Link></p>
            </form>
        </div>
    )
}

export default RegisterPage