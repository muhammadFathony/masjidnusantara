import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import { TextProvider } from "./context/TextContext"
import { BannerProvider } from "./context/BannerContext";
import Router from "./routes";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BannerProvider>
    <TextProvider>
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
    </TextProvider>
  </BannerProvider>

);
