// Initialization for ES Users

import React, { Fragment, useEffect } from "react";
import FarmerNav from "./FarmerNav";


import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
const FarmerHome = () => {
  const navigate = useNavigate();
  
  const [question, setQuestion] = useState({
    question: ""
  });
  const [data, setData] = useState([]);

  const [click, setClick] = useState(false);
  console.log(click, "click");
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/question`);
    console.log(res.data, "all questions");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = e => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async () => {
    const res = await axios.post(`http://localhost:4000/question`, question);
    console.log(res.data, "questions");
    setQuestion({
      question: ""
    });
    setClick(false);
    navigate(`/farmerHome`);
    getData();
  };
  const [open, setOpen] = useState(0);
  const handleOpen = id => {
    setOpen(open === id ? 0 : id);
  };

  return (
    <div>
      <FarmerNav />

      <div className="flex justify-center">
        <button
          onClick={() => setClick(true)}
          className="flex bg-gradient-to-l from-indigo-400 to-pink-500  btn-lg flex text-center text-lg text-light rounded w-64  py-2 px-5 mt-3"
        >
          Add Questions
        </button>
      </div>
      {click &&
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body">
                <div className="mt-3">
                  <label
                    className="block text-red-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Add Your Question:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="question"
                    onChange={handleChange}
                    value={question.question}
                    placeholder="Username"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleSubmit()}
                    className="flex bg-gradient-to-l from-indigo-400 to-pink-500  btn-lg flex text-center text-lg text-light rounded w-32  py-2 px-4 mt-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <div className="container mt-3">
        <div className="row">
          <Link
            className=" text-end inline-block align-baseline font-bold text-sm text-red-600 hover:text-blue-800"
            to="/checkSoil"
          >
            Check Your Soil? click Here
          </Link>

          <div className="card my-5  bg-gradient-to-l from-indigo-400 to-pink-500 ">
            <div className="container  mt-3">
              {data.map((item, index) => {
                return (
                  <Fragment  key={index}>
                    {console.log(item._id,"id")}
                    <Accordion open={open === item._id} >
                      <AccordionHeader
                        onClick={() => handleOpen(item._id)}
                        className="text-white"
                       
                      >
                        {item.question}
                      </AccordionHeader>
                      <AccordionBody className="text-white">
                        {item.answer}
                      </AccordionBody>
                    </Accordion>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerHome;
