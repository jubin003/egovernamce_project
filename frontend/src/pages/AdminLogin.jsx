import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })





    const handleInputChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }

    // handle form submit
    const handleloginreq = async () => {
        try {
            const res = await fetch("http://localhost:5001/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData),
            });

            const data = await res.json();

            if (res.ok) {
                // store token in localStorage
                localStorage.setItem("adminToken", data.token);

                // redirect to dashboard
                navigate("/admin/dashboard");
            } else {
                alert(data.msg || "Login failed");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Try again.");
        }
    };


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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                        />
                    </div>
                </div>


                <NavLink to="">

                    <Button label="Sign In" onClick={handleloginreq} />
                </NavLink>

                <NavLink to="/" className="block mt-4 text-blue-700 hover:underline text-sm font-medium">
                    Back to Home
                </NavLink>
            </div>
        </div>
    );
}