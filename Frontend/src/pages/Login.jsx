import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { assets } from "../assets/assets.js"
import toast from 'react-hot-toast'
import { AppContext } from "../context/AppContext.jsx"

const Login = () => {
  const { navigate, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(formData);

    toast.success("login successfull");
    setUser(true);
    navigate("/");
  }
  return (
    <div 
      className="py-12 h-screen bg-[#0B482F]" 
      style={{backgroundImage: `url(${assets.footer_img})`}}>

      <div>
        <h1 className="text-4xl text-white font-bold text-center mb-8 capitalize">
          Login into your account
        </h1>
        <form
          onSubmit={submitHandler}
          className="max-w-md mx-auto text-white p-4 border border-white rounded">
          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              required
              className="w-full outline-none border border-white py-3 p-2 rounded" />
          </div>
          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Enter your password"
              required
              className="w-full outline-none border border-white py-3 p-2 rounded" />
          </div>
          <button className="bg-primary text-white cursor-pointer w-full py-3 rounded">
            Login
          </button>
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-primary underline">
              Signup
            </Link>{" "}
          </p>
        </form>
      </div>

    </div>
  )
}

export default Login
