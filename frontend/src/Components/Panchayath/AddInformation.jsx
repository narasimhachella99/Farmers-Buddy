import React, { useState } from "react";
import PanchayathNav from "./PanchaythaNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const AddInformation = () => {
  const [data, setData] = useState({
    comment: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = async () => {
    try {
      console.log(params.id, "id");
      const updateSoil = await axios.patch(
        `http://localhost:4000/soil/${params.id}`,
        data
      );
      toast.success("information added about the soil",{})

      setData({
        comment: ""
      });
      console.log(updateSoil.data, "daata");
    } catch (error) {
      console.log(error, "err");
    }
  };
  const params = useParams();
  return (
    <div>
      <div className="row">
        <PanchayathNav />
        <div className="col-sm-3" />
        <div className="col-sm-5">
          <div className="card mt-4">
            <div className="card-body">
              <div className="mb-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Add Text
                </label>
                <textarea
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  name="comment"
                  value={data.comment}
                  onChange={handleChange}
                  placeholder="comment"
                />
              </div>
              <button className="btn btn-primary" onClick={() => handleClick()}>
                Submit
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddInformation;
