import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component1/NavBar";
import LandingPage from "./component2/LandingPage";
import Project from "./component1/Project";
import Dashboard from "./component2/Dashboard";
import AboutUs from "./component1/aboutUs/AboutUs";

function App() {
  // const [newMemberData, setNewMemberData] = useState("");
  const [tasks, setTasks] = useState([""]);
  const [lists, setlists] = useState([""]);
  const [completed, setCompleted] = useState("");

  const addToNewTasks = (item) => {
    setTasks([...tasks, item]);
  };

  // const removeFromTodoList = (item) => {
  //   const liststaskslists = tasks.filter((d, i) => i !== item);
  //   setTasks(liststaskslists);
  // };

  const addToInProgress = (item, index) => {
    setlists([...lists, item]);
    const newList = tasks.filter((d, i) => i !== index);
    setTasks(newList);
  };

  const addToCompleted = (item, index) => {
    setCompleted([...lists, item]);
    const newList2 = completed.filter((d, i) => i !== index);
    setCompleted(newList2);
  };

  // const removeFromInprogress = (index) => {
  //   const listsArr = lists.filter((d, i) => i !== index);
  //   setlists(listsArr);
  // };

  // const newMemberDetail = (item) => {
  //   setNewMemberData([...newMemberData, item]);
  // };

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
                setTasks={setTasks}
                addToInProgress={addToInProgress}
                lists={lists}
                addToCompleted={addToCompleted}
                // removeFromTodoList={removeFromTodoList}
                // removeFromInprogress={removeFromInprogress}
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
