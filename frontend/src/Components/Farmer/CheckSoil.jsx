import React, { useState } from "react";
import FarmerNav from "./FarmerNav";
import { Dropdown, Ripple, initTE } from "tw-elements";
import axios from "axios";
import { Link } from "react-router-dom";
const CheckSoil = () => {
  initTE({ Dropdown, Ripple });
  const [data, setData] = useState([]);
  const [crop, setCrop] = useState({
    season: "",
    soilType: ""
  });
  const [click, setClick] = useState(false);
  const handleSubmit = async () => {
    const res = await axios.get(
      `http://localhost:4000/soil/search?season=${crop.season}&soilType=${crop.soilType}`
    );
    setData(res.data);
    setClick(true);
  };
  console.log(data, "res");

  const handleChange = e => {
    setCrop({
      ...crop,
      [e.target.name]: e.target.value
    });
  };
  console.log(crop.season, "season");
  console.log(crop.soilType, "soilType");
  return (
    <div>
      <FarmerNav />
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div
              className="card  my-5 mb-5"
              style={{ height: 300, width: 700 }}
            >
              <div className="card-body mt-5">
                <div className="card-header mb-3">
                  <b className="text-sky-400 fs-3">Check Your Soil</b>
                </div>
                <div className="flex justify-center ">
                  <div className="card mr-5">
                    <div className="card-body">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-2 mr-4"
                        for="username"
                      >
                        Select Your Season
                      </label>
                      <div class="form-floating ">
                        <select
                          class="form-select bg-danger text-light"
                          id="floatingSelect"
                          name="season"
                          value={crop.season}
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
                  <div className="card mr-5">
                    <div className="card-body">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-2 mr-6"
                        for="username"
                      >
                        Select Your Soil
                      </label>
                      <div class="form-floating">
                        <select
                          class="form-select bg-warning"
                          id="floatingSelect"
                          name="soilType"
                          value={crop.soilType}
                          onChange={handleChange}
                          aria-label="Floating label select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="alluvialsoils">Alluvial soils.</option>
                          <option value="blacksoil">
                            Black (or Regur soil)
                          </option>
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
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-2 mr-4"
                        for="username"
                      >
                        Submit Here
                      </label>
                      <button
                        className="bg-blue-500 mt-2mb-3 flex justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={() => handleSubmit()}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-5 mt-5">
            {click &&
              <div className="card my-5 ">
                <div className="card-header">
                  <h3 className="text-bold fs-3">SOIL INFORAMTION</h3>
                  </div>
                <div className="card-body">
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          {data && data.map((item, index) => {
                            return (
                              <table
                                class="min-w-full text-left text-sm font-light"
                                key={index}
                              >
                                <thead class="border-b  border-b dark:border-neutral-500 font-medium dark:border-neutral-500 ">
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      S.No
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      {item._id}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      SeaSon{" "}
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      {item.season}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      SoilName
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      {item.soilType}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Nitorgen(N)
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      {item.nitrogen}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Phosporous(P2O5)
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      {/* {item} */}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Use Fertilizer per hectare{" "}
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      {item.fertilizer}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Cost Of fertilizer{" "}
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                  {item.cost}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Use Fertilizer per year{" "}
                                    </th>
                                    <td class="whitespace-nowrap px-6 py-4">
                                     {item.fertilizerYear}
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="border-b dark:border-neutral-500" />
                                </tbody>
                              </table>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 mb-3 row">
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/addSoil  "
                  >
                    Unsatisfied with the given data? Click Here{" "}
                  </Link>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckSoil;
