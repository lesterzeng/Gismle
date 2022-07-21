import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./components/aboutUs/AboutUs";
import ErrorModal from "./components/ErrorModal";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";

function App() {
  // const [newMemberData, setNewMemberData] = useState("");
  const [tasks, setTasks] = useState([""]);
  const [lists, setlists] = useState([""]);
  const [completed, setCompleted] = useState("");

  const storeIsError = useSelector((state) => state.getThingsDone.isError);

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
    <>
      {storeIsError && <ErrorModal />}
      <div className="bg-blue-200">
        <div className="bg-blue-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/landingpage" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cards/:id" element={<Project />} />
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
        <Modal />
        <Modal2 />
      </div>
    </>
  );
}

export default App;
