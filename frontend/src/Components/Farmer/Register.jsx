import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MainNav from "../MainNav";
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    totalLand: ""
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async ()  => {
    try {
      const res = await axios.post(`http://localhost:4000/farmer`, data);
      console.log(res.data.email, "email");
      toast.info("Farmer Added Successfully", {});
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: 0,
        totalLand: ""
      });
      console.log(res.data, "user");

      // navigate("/login")
    } catch (err) {
      console.log(err, "erro");
      toast.error(err.response.data.error, {});
    }
  };
  return (
    <div className="cardbg">
      <MainNav />
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-5">
          <div className="card mt-5">
            <div className="text-sky-600 fs-4 mb-3">FARMER REGISTER</div>
            <div className="card-body">
              <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      firstName
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={data.firstName}
                      placeholder="Enter firstName"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      lastName
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      value={data.lastName}
                      placeholder="lastName"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  {" "}<div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Email
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={data.email}
                      placeholder="email"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Password
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      placeholder="password"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      onChange={handleChange}
                      type="tel"
                      title="please enter ten numbers"
                      pattern="[0-9]{10}"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      placeholder="phoneNumber"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      TOTAL LAND
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      onChange={handleChange}
                      type="tel"
                      name="totalLand"
                      value={data.totalLand}
                      placeholder="Land"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary text-sky-900 mt-2 mr-20"
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  SUBMIT
                </button>
                <Link
                  className=" text-end inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/login"
                >
                  Already have an account? Login Here
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
