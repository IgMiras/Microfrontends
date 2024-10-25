import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CustomButton from "./components/Button/Button";
import WrappedHome from "./page/Home";

const App = () => (
  <div className="container">
    <WrappedHome>
      <CustomButton onClick={() => console.log('clickou')}>
        Clique aqui
      </CustomButton>
    </WrappedHome>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)