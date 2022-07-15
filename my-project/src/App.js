import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import Form from "./component2/LandingPage";
// import Main from "./components/Main";
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
