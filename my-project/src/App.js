import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import Form from "./component2/LandingPage";
import Project from "./component1/Project";
import Dashboard from "./component2/Dashboard";

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
    <div className="App">
      <svg
        class="w-6 h-6 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        ></path>
      </svg>
      <div>
        {/* <h4 className="time">{new Date().toLocaleString()}</h4> */}
        <h2 className="welcome">
          Welcome to <span className="gismle">Hello</span> App
        </h2>

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
