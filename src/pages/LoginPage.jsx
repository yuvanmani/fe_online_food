import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/auth/loginSlice"
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const LoginPage = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // handle the login logic here
    authServices.login({ email, password })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setEmail(""));
        dispatch(setPassword(""));

        // navigate to the dashboard page
        setTimeout(() => {
          navigate("/dashboard")
        }, 500)

      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="max-w-xs mx-auto mt-6 p-4 border rounded">
      <h2 className="text-2xl mb-4 text-green-600 font-semibold">User Login</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Enter email" className="border p-2 rounded"
          value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <input type="password" name="password" placeholder="Enter password" className="border p-2 rounded"
          value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
        <p className="text-gray-700 text-md font-semibold">New to Foody Hub? <Link to="/register"><span className="text-green-600 text-md font-bold">Register here</span></Link></p>
      </form>
    </div>
  )
}

export default LoginPage