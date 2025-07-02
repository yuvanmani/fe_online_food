import { Link } from "react-router"

const HomePage = () => {
  return (
    <>
      <div className="max-w-xs mx-auto mt-6 p-4 border rounded">
        <h2 className="text-xl font-semibold text-gray-600">Welcome to<span className="text-green-500 font-semibold text-2xl font-serif italic rounded p-1 underline underline-offset-2"> Foody Hub!!</span></h2>
      </div>
      <div className="max-w-xs mx-auto mt-2 p-4 border rounded">
        <h2 className="text-md font-semibold text-gray-600">Explore the <span className="text-purple-500 font-semibold text-2xl font-serif italic rounded p-1">Delicious </span>food items in our <span className="text-purple-500 font-semibold text-2xl font-serif italic rounded p-1">Foody Hub!!</span></h2>
      </div>
      <div className="max-w-xs mx-auto mt-2 p-4 border rounded">
        <h2 className="text-md font-semibold text-gray-600">To explore more <Link to="/login"><span className="text-green-500 font-semibold text-md font-serif italic rounded p-1">Login </span></Link>or <Link to="/register"><span className="text-green-500 font-semibold text-md font-serif italic rounded p-1">Register</span></Link></h2>
      </div>
    </>
  )
}

export default HomePage