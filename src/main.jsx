import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import App_Navbar from "./component/Navbar.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App_Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
