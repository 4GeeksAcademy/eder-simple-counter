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
  } else if (digit2[0] < 9 && digit2[1] === true) {
    digit1[1] = false;
    digit1[0] = 0;
    sum = digit2[0];
    sum++;
    digit2[0] = sum;
  } else if (digit3[0] < 9 && digit3[1] === true) {
    digit2[1] = false;
    digit2[0] = 0;
    sum = digit3[0];
    sum++;
    digit3[0] = sum;
  } else if (digit4[0] < 9 && digit4[1] === true) {
    digit3[1] = false;
    digit3[0] = 0;
    sum = digit4[0];
    sum++;
    digit4[0] = sum;
  } else if (digit5[0] < 9 && digit5[1] === true) {
    digit4[1] = false;
    digit4[0] = 0;
    sum = digit5[0];
    sum++;
    digit5[0] = sum;
  } else if (digit6[0] < 9 && digit6[1] === true) {
    digit5[1] = false;
    digit5[0] = 0;
    sum = digit6[0];
    sum++;
    digit6[0] = sum;
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
}, 100);

/* setInterval(() => {
  digit1++;
  ReactDOM.createRoot(document.getElementById("app")).render(
    <Home digit1={digit1} />
  );
}, 1000); */

/* function testInterval(params) {
  if (digit1 < 9) {
    setInterval(() => {
      digit1++;
      ReactDOM.createRoot(document.getElementById("app")).render(
        <Home digit1={digit1} />
      );
    }, 1000);
  }
}

testInterval(); */
/* while (digit6 == 0) {
  if (digit1 < 9) {
    setInterval(() => {
      digit1++;
      ReactDOM.createRoot(document.getElementById("app")).render(
        <Home digit1="digit1" digit2="digit2" />
      );
    }, 1000);
  } else if (digit2 < 9) {
    setInterval(() => {
      digit1 = 0;
      digi2++;
      ReactDOM.createRoot(document.getElementById("app")).render(
        <Home digit1="digit1" digit2="digit2" />
      );
    }, 1000);
  }
} */

//render your react application
//ReactDOM.createRoot(document.getElementById("app")).render(<Home />);
