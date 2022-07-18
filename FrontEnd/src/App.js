import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import Form from "./component2/LandingPage";
import Project from "./component1/Project";
import Dashboard from "./component2/Dashboard";
import img1 from "./pen.jpg";

// import "./component1/MainPage.css";

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
    <div className="bg-slate-300">
      <div>
        <img src={img1} alt="" className="h-20"></img>
      </div>
      <h2 className="text-6xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-gray-500">
          {" "}
          .GISMLE APP
        </span>
      </h2>
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
            path="/form/*"
            element={
              <Form
                newMemberDetail={newMemberDetail}
                newMemberData={newMemberData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
