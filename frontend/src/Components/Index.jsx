import React from "react";
import MainNav from "./MainNav";

const Index = () => {
  return (
    <div className="bg-yellow-400">
      <MainNav />
      <div className="container ">
        <div className="row mt-0">
          <div className="container">
            <div className="card my-5">
              <div className="row">
                <div className="col-sm-4">
                    <div className="fs-1 text-center  underline decoration-double text-sky-600 font-serif font-bold">
                        FARMER'S BUDDY
                    </div>
                  <div className="text-center text-dark display-5 mt-5">
                    <b>
                      <h3>Download Landing page for Farmer & Agriculture</h3>
                    </b>
                  </div>
                  <b className="text-lime-600 fs-4 mt-5 text-center flex justify-center">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point
                  </b>
                  <button className="btn btn-success text-center flex justify-center mt-5">Welcome</button>
                </div>
                <div className="col-sm-8">
                  <div className="adminbg">
                    <div className="mt-5">
                      <b className="text-light flex justify-center mt-5 display-3">
                        Farmer Buddy
                      </b>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt-4">
                <div className="col-sm-8">
                  <div className="cardbg">
                    {" "}<b className=" mt-5 flex justify-center display-4 text-light">
                      {" "}Farmer Buddy
                    </b>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="text-center text-dark display-5 mt-5">
                    <b>
                      <h3>About Our Farmer</h3>
                    </b>{" "}
                  </div>
                  <b className="text-lime-600 text-start fs-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and
                  </b>
                  <button className="btn btn-success text-center flex justify-center mt-5">Welcome</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
