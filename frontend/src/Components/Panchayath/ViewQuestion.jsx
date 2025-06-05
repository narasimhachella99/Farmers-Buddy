import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PanchayathNav from "./PanchaythaNav";
import { toast } from "react-toastify";

const ViewQuestion = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/question`);
    console.log(res.data);

    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <PanchayathNav />
      <div className="container mt-5">
        <div className="flex justify-center">
          <table class="table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.question}</td>
                    {console.log(item._id)}{" "}
                    <td>
                      <button
                        onClick={() => navigate(`/addAnswer/${item._id}`)}
                        className="btn btn-info text-light"
                      >
                        Add Answer
                      </button>
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

export default ViewQuestion;
