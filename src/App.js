import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import Form from "./component1/Form";
import Main from "./component2/Main";
import Project from "./component1/Project";
import Empty1 from "./component1/Empty1";

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
        <h4 className="time">{new Date().toLocaleString()}</h4>
        <h2 className="welcome">
          Welcome to <span className="gismle">Gismle</span> management App
        </h2>

        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Project />} />
          <Route
            path="/page-two"
            element={
              <Main
                addToNewTasks={addToNewTasks}
                tasks={tasks}
                addOnGoingTasks2={addOnGoingTasks2}
                onGoingTask={onGoingTask}
              />
            }
          />
          <Route path="/page-three" element={<Empty1 />} />
          <Route
            path="/page-four/*"
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
