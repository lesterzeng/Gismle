import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FormBar from "../component1/FormBar";
import Members from "../component1/Members";
import NewMember from "../component1/NewMember";

const Form = (props) => {
  // const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phonetNumber, setPhonetNumber] = useState("");
  const [updateList, setUpdateList] = useState("");
  //   const [formError, setFormError] = useState({});
  //   const [isSubmit, setIsSubmit] = useState(false);
  //   const [hasSubmited, setHasSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdateList([
      email,
      password,
      password2,
      firstName,
      LastName,
      phonetNumber,
    ]);
  };
  //     setHasSubmited(true);

  //     props.addToWishList(newWishList);
  //     setFormError(newWishList);
  //     setIsSubmit(true);

  //     props.setInput("");
  // setNewName("");
  // setEmail("");
  // setPassword("");

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
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
    console.log(event.target.value);
  };
  const handPhonetNumber = (event) => {
    setPhonetNumber(event.target.value);
    console.log(event.target.value);
  };

  //   const handleClearButton = () => {
  //     setHasSubmited(false);
  //   };

  return (
    <>
      <h1>
        Hi {updateList[3]}
        {updateList[4]},
      </h1>
      <FormBar />

      <Routes>
        <Route
          path="/members"
          element={
            <Members
              handleSubmit={handleSubmit}
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
              handleEmail={handleEmail}
              handleNewPassword={handleNewPassword}
              handleNewPassword2={handleNewPassword2}
              updateList={updateList}
              newMemberData={props.newMemberData}
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
              handPhonetNumber={handPhonetNumber}
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
