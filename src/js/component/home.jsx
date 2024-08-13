import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
<i class="fa-solid fa-hourglass-half"></i>;
//create your first component
const Home = ({ digit1, digit2, digit3, digit4, digit5, digit6 }) => {
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="row text-center justify-content-center">
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p>
            <i class="fa-solid fa-hourglass-half pt-3"></i>
          </p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit6}</p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit5}</p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit4}</p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit3}</p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit2}</p>
        </div>
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2">{digit1}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
