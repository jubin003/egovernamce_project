import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../components/ui/Button";

export default function AdminLogin() {


    // handle form submit
    const handlelogin= async ()=>{
        const res= await fetch("http://localhost:5001/api/admin/login",{
            method: "POST",
            body: ""
        })

    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
            <FiLock className="w-8 h-8 text-blue-700" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
        <p className="text-gray-500 text-sm mt-1 mb-6">
          Enter your credentials to access the admin dashboard
        </p>

        <div className="text-left mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200">
            <FiMail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="admin@example.com"
              className="bg-transparent w-full outline-none text-gray-700 "
            />
          </div>
        </div>

        <div className="text-left mb-6">
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FiLock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              className="bg-transparent w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium shadow-sm transition">
          Sign In
        </button> */}
        <Button label="Sign In" onClick={handlelogin}/>

        <a href="/" className="block mt-4 text-blue-700 hover:underline text-sm font-medium">
          Back to Home
        </a>
      </div>
    </div>
  );
}