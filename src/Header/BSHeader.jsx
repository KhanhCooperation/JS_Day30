import React from "react";

const BSHeader = () => {
  return (
    <div className="bg-dark w-100 text-white ">
      <div className="container d-flex justify-content-between">
        <h4>Start Bootstrap</h4>
        <div className="d-flex justify-content-between">
          <a href="#" className="text-decoration-none text-white">
            Home
          </a>
          <a href="#" className="ml-5 text-decoration-none text-white">
            About
          </a>
          <a href="#" className="ml-5 text-decoration-none text-white">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default BSHeader;
