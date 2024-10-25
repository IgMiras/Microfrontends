import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
//import Button from "host/CustomButton";
import Products from "./components/Products/Products";

const App = () => (
  <div className="container">
    <Products />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)