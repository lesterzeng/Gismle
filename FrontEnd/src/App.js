import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import LandingPage from "./component2/LandingPage";
import Project from "./component1/Project";
import Dashboard from "./component2/Dashboard";
import AboutUs from "./component1/aboutUs/AboutUs";

// import "./component1/MainPage.css";
// "tw-elements": "^1.0.0-alpha12",
function App() {
  const [newMemberData, setNewMemberData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [onGoingTask, setOnGoingTask] = useState([]);

  const addToNewTasks = (item) => {
    setTasks([...tasks, item]);
  };
  const addOnGoingTasks2 = (item) => {
    setOnGoingTask([...onGoingTask, item]);
  };

  const newMemberDetail = (item) => {
    setNewMemberData([...newMemberData, item]);
  };

  return (
    <div>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/cards"
            element={
              <Project
                addToNewTasks={addToNewTasks}
                tasks={tasks}
                addOnGoingTasks2={addOnGoingTasks2}
                onGoingTask={onGoingTask}
                setTasks={setTasks}
              />
            }
          />
          <Route
            path="/aboutus"
            element={
              <AboutUs />
              // <Form
              //   newMemberDetail={newMemberDetail}
              //   newMemberData={newMemberData}
              // />
            }
          />
          <Route path="/landingPage" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
