import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FarmerNav from "./FarmerNav";

const ViewSoilInfo = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/soil`);
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <FarmerNav />
      <div className="container mt-5">
        <div className="flex justify-center">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type of Soil</th>
                <th>Season</th>
                <th>Nitrogen</th>
                <th>Phosphrus</th>
                <th>Fertilizer</th>
                <th>Cost</th>
                <th>FertilizerYear</th>
                <th>Comments By Panchayath</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td >
                      {item.name}
                    </td>
                    <td >
                      {item.soilType}
                    </td>
                    <td >
                      {item.season}
                    </td>
                    <td >
                      {item.nitrogen}
                    </td>
                    <td >
                      {item.phosphrus}
                    </td>
                    <td >
                      {item.fertilizer}
                    </td>
                    <td >
                      {item.cost}
                    </td>
                    <td >
                      {item.fertilizerYear}
                    </td>
                    <td className="text-danger fs-6">
                      {item.comment}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewSoilInfo;
