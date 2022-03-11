import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Norway from "./Components/Norway";
import Reine from "./Components/Reine";
import Trolltunga from "./Components/Trolltunga";
import Flam from "./Components/Flam";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path={"/"} exact element={<Norway home={true} />} />
          <Route path={"/reine"} element={<Reine />} />
          <Route path={"/trolltunga"} element={<Trolltunga />} />
          <Route path={"/flam"} element={<Flam />} />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
