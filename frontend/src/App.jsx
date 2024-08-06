import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import GameProperties from "./Pages/GameProperties";

function App() {
  return (
    <>
      <Nav />

      <div className="flex">
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/:id" element={<GameProperties />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
