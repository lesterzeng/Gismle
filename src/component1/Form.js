import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FormBar from "./FormBar";
import Members from "./Members";
import NewMember from "./NewMember";

const Form = (props) => {
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [printData, setPrintData] = useState([]);
  const [updateList, setUpdateList] = useState("");
  //   const [formError, setFormError] = useState({});
  //   const [isSubmit, setIsSubmit] = useState(false);
  //   const [hasSubmited, setHasSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newMemberDetail = { newName, email, password };
    setUpdateList([newName, email, password]);
    // props.newMemberDetail(newMemberDetail);
  };
  //     setHasSubmited(true);

  //     props.addToWishList(newWishList);
  //     setFormError(newWishList);
  //     setIsSubmit(true);

  //     props.setInput("");
  // setNewName("");
  // setEmail("");
  // setPassword("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleNewPassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleNewPassword2 = (event) => {
    setPassword2(event.target.value);
    console.log(event.target.value);
  };

  //   const handleClearButton = () => {
  //     setHasSubmited(false);
  //   };

  return (
    <>
      <h1>Hi {updateList[0]},</h1>
      <FormBar />

      <Routes>
        <Route
          path="/members"
          element={
            <Members
              handleSubmit={handleSubmit}
              handleNewName={handleNewName}
              handleEmail={handleEmail}
              handleNewPassword={handleNewPassword}
              handleNewPassword2={handleNewPassword2}
              updateList={updateList}
              newMemberData={props.newMemberData}
            />
          }
        />
        <Route
          path="/newMember"
          element={
            <NewMember
              handleSubmit={handleSubmit}
              handleNewName={handleNewName}
              handleEmail={handleEmail}
              handleNewPassword={handleNewPassword}
              handleNewPassword2={handleNewPassword2}
              updateList={updateList}
              newMemberData={props.newMemberData}
            />
          }
        />
      </Routes>
    </>
  );

  // <div>
  //   {hasSubmited ? (
  //     <Members updateList={updateList} />
  //   ) : (
  //     <NewMember
  //       handleSubmit={handleSubmit}
  //       handleNewDestination={handleNewDestination}
  //       handleNewcCheckIn={handleNewcCheckIn}
  //       handleNewCheckOut={handleNewCheckOut}
  //     />
  //   )}
  //   <button onClick={handleClearButton}>clear</button>
  // </div>
};
export default Form;
