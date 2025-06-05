import React, { useEffect, useState } from "react";
import FarmerNav from "./FarmerNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const email = JSON.parse(localStorage.getItem("email"));

const AddSoil = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    season: "",
    soilType: "",
    nitrogen: "",
    phosphrus: "",
    fertilizer: "",
    cost: null,
    fertilizerYear: null,
    comments: ""
  });

  const handleChange = async e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  console.log(email,"email")
  const getUser = async () => {
    const res = await axios.get(`http://localhost:4000/farmer/${email}`);
    console.log(res.data, "user");
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/soil`, data);
      console.log(res.data, "soil");
      toast.success("Soil added successfully");
      setData({
        name: "",
        season: "",
        soilType: "",
        nitrogen: "",
        phosphrus: "",
        fertilizer: "",
        cost: null,
        fertilizerYear: null,
        comments: ""
      });
    } catch (error) {
      toast.error("Not added");
    }
  };
  console.log(data.soilType, "soilType");
  console.log(data.phosphrus, "phospours");

  return (
    <div>
      <FarmerNav />
      <div class="bg-white  w-9/12 m-auto my-10 shadow-2xl">
        <div class="py-8 px-5 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Add Soil</h1>
          <form onSubmit={handleSubmit} class="mt-6">
            <div className=" flex gap-2">
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="text"
                  name="name"
                  value={(data.name = user.firstName)}
                  onChange={handleChange}
                  autofocus
                  id="username"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder=" Name"
                />
              </div>
              <div class="md:w-1/2 my-2 text-sm">
                <div class="form-floating ">
                  <select
                    class="form-select  text-dark"
                    id="floatingSelect"
                    name="season"
                    value={data.season}
                    onChange={handleChange}
                    aria-label="Floating label select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="kharif">Kharif</option>
                    <option value="rabi">Rabi</option>
                    <option value="zaid"> Zaid</option>
                  </select>
                  <label for="floatingSelect">Select any season</label>
                </div>{" "}
              </div>
            </div>
            <div className=" flex gap-2">
              <div class="md:w-1/2 my-2 text-sm">
                <div class="form-floating">
                  <select
                    class="form-select "
                    id="floatingSelect"
                    name="soilType"
                    value={data.soilType}
                    onChange={handleChange}
                    aria-label="Floating label select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="alluvialsoils">Alluvial soils.</option>
                    <option value="blacksoil">Black (or Regur soil)</option>
                    <option value="redAndYellowSoils">
                      Red and Yellow soils.
                    </option>
                    <option value="lateriteSoils">Laterite soils.</option>
                    <option value="aridAndDesertSoils">
                      Arid and desert soils.
                    </option>
                    <option value="forestAndMountainSoils">
                      Forest and mountain soils.
                    </option>
                  </select>
                  <label for="floatingSelect">Select soil Type</label>
                </div>
              </div>
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="text"
                  name="nitrogen"
                  value={data.nitrogen}
                  onChange={handleChange}
                  id="password"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Notrogen"
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="text"
                  name="phosphrus"
                  value={data.phosphrus}
                  onChange={handleChange}
                  autofocus
                  id="username"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Phosphurus"
                />
              </div>
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="text"
                  name="fertilizer"
                  value={data.fertilizer}
                  onChange={handleChange}
                  id="password"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="User fertilizer for hectare"
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="text"
                  name="cost"
                  value={data.cost}
                  onChange={handleChange}
                  autofocus
                  id="username"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Cost of fertilizer"
                />
              </div>
              <div class="md:w-1/2 my-2 text-sm">
                <input
                  type="number"
                  name="fertilizerYear"
                  value={data.fertilizerYear}
                  onChange={handleChange}
                  id="password"
                  class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Fertilizer for year"
                />
              </div>
            </div>
            <div className=" flex justify-start my-4">
              <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-96">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSoil;
