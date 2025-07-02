import { useDispatch, useSelector } from "react-redux"
import { selectEmail, selectOtp, setEmail, setOtp } from "../redux/features/auth/verifySlice"
import { useNavigate } from "react-router";
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const VerifyPage = () => {

  const email = useSelector(selectEmail);
  const otp = useSelector(selectOtp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    // handle the verify otp logic here
    authServices.verify({ email, otp })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setEmail(""));
        dispatch(setOtp(""));

        // redirect to login page
        setTimeout(() => {
          navigate("/login");
        }, 500)
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      })
  }

  return (
    <div className="max-w-xs mx-auto mt-6 p-4 border rounded">
      <h2 className="text-2xl mb-4 text-green-600 font-semibold">Verify OTP</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleVerify}>
        <input type="email" name="email" placeholder="Enter email" className="border p-2 rounded"
          value={email} onChange={(e) => dispatch(setEmail(e.target.value))} required />
        <input type="password" name="password" placeholder="Enter OTP" className="border p-2 rounded"
          value={otp} onChange={(e) => dispatch(setOtp(e.target.value))} required autoComplete="off" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
  )
}

export default VerifyPage