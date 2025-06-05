import React from "react";
import MainNav from "./MainNav";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/farmer/login`, data);
      console.log(res.data, "login");

      if (res.data.msg === "Panchayath login successfully") {
        toast.success("panchayath Login Successfully..!", {
          position: "top-center"
        });
        navigate("/panchaythHome");

        console.log(res.data, "userlogin");
      } else {
        navigate("/farmerHome");
        toast.success("panchayath Login Successfully..!", {
          position: "top-center"
        });
        console.log(res.data, "adminlogin");
      }
      window.location.reload(true);

      localStorage.setItem("email", JSON.stringify(data.email));
    } catch (err) {
      console.log(err.response.data, "message");
      toast.error(err.response.data.msg, {});
    }
  };
  return (
    <div className="adminbg">
      <MainNav />
      <div className="row mt-5">
        <div className="col-sm-2" />
        <div className="col-sm-4">
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="******"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-3  row">
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/register"
                >
                  You don't have an account? Register ?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
