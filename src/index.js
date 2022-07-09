import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import SmoothScroll from "smooth-scroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
AOS.init();
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  speedAsDuration: true,
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
