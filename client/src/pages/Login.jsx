import { useState } from "react"
import toast from "react-hot-toast"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {

  const dipatch = useDispatch();
  const navigate = useNavigate();

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post(import.meta.env.VITE_API_URL+"/login",{
        email,
        password,
      })
      const data =await response.data
      toast.success(data.message)
      // dipatch karna hai login -> jo bhi data aa raha hai sab push karna hai state me
      dipatch(login(data));
      navigate(`/${data.role}/profile`);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
      <h1 className='text-2xl font-bold text-center mb-4'>
        Login
      </h1>
      <form onSubmit={handleLogin}>
        {/* For Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
          <input type='text' name='email' id="email" placeholder='your@email.com' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'/>
        </div>
        {/* For Password */}
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
          <input type='password' name='password' id="password" placeholder='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'/>
        </div>
        {/* Forgot Password */}
        <a href="#" className="text-xs text-gray-600 hover:text-black">
            Forgot Password?
          </a>
        {/* Login with Account */}
        <div className="flex items-center justify-end mb-4">
            <Link className="text-xs text-black " to="/signup">Sign Up</Link>    
        </div>
        <button className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black">Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login