import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./components/aboutUs/AboutUs";
import ErrorModal from "./components/ErrorModal";
import { useSelector } from "react-redux";
import Board from "./pages/Board";

function App() {
  const storeIsError = useSelector((state) => state.getThingsDone.isError);

  return (
    <>
      {storeIsError && <ErrorModal />}
      <div className="bg-blue-200">
        <div className="bg-blue-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/landingpage" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/board/:id" element={<Board />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
