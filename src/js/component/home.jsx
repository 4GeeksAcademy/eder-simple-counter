import React, { useEffect, useRef, useState } from "react";

//include images into your bundle

<i class="fa-solid fa-hourglass-half"></i>;
//create your first component
const Home = () => {
  const [seconds, setSeconds] = useState(0);
  let newSecond = 0;
  let control = 0;
  function updateSeconds() {
    newSecond++;
    setSeconds(newSecond);
  }

  useEffect(() => {
    const time = setInterval(() => {
      updateSeconds();
      control++;
    }, 1000);

    return () => clearInterval(time);
  }, [control]);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="row text-center justify-content-center">
        <div className="col-md-1 display-5 fw-bold text-white bg-dark rounded-pill">
          <p>
            <i className="fa-solid fa-hourglass-half pt-3"></i>
          </p>
        </div>
        <div className="col-md-3 display-5 fw-bold text-white bg-dark rounded-pill">
          <p className="pt-2" style={{ letterSpacing: "20px" }}>
            {seconds.toString().padStart(6, "0")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
