//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//// Timer ////
let sum = 0;
let digit1 = [0, true];
let digit2 = [0, true];
let digit3 = [0, true];
let digit4 = [0, true];
let digit5 = [0, true];
let digit6 = [0, true];

setInterval(() => {
  if (digit1[0] < 9 && digit1[1] === true) {
    sum++;
    digit1[0] = sum;
    digit2[1] = true;
  } else if (digit2[0] < 9 && digit2[1] === true) {
    digit1[1] = false;
    if (digit6[0] != 9) {
      digit1[0] = 0;
    }
    sum = digit2[0];
    sum++;
    digit2[0] = sum;
    digit3[1] = true;
  } else if (digit3[0] < 9 && digit3[1] === true) {
    digit2[1] = false;
    if (digit6[0] != 9) {
      digit2[0] = 0;
    }
    sum = digit3[0];
    sum++;
    digit3[0] = sum;
    digit4[1] = true;
  } else if (digit4[0] < 9 && digit4[1] === true) {
    digit3[1] = false;
    if (digit6[0] != 9) {
      digit3[0] = 0;
    }
    sum = digit4[0];
    sum++;
    digit4[0] = sum;
    digit5[1] = true;
  } else if (digit5[0] < 9 && digit5[1] === true) {
    digit4[1] = false;
    if (digit6[0] != 9) {
      digit4[0] = 0;
    }
    sum = digit5[0];
    sum++;
    digit5[0] = sum;
  } else if (digit6[0] < 9 && digit6[1] === true) {
    digit5[1] = false;
    if (digit6[0] != 9) {
      digit5[0] = 0;
    }
    sum = digit6[0];
    sum++;
    digit6[0] = sum;
    if (digit6[0] == 9) {
      digit1[1] = true;
      sum = 0;
    }
  }
  ReactDOM.createRoot(document.getElementById("app")).render(
    <Home
      digit1={digit1}
      digit2={digit2}
      digit3={digit3}
      digit4={digit4}
      digit5={digit5}
      digit6={digit6}
    />
  );
}, 1000);
