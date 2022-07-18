import React, { useState } from "react";
import LeftSignIn from "../component1/members/LeftSignIn";
import RightSignUp from "../component1/members/RightSignUp";
import SignIn from "../component1/members/SignIn";
import SignUp from "../component1/members/SignUp";

const LandingPage = () => {
  const [toggleSign, setToggleSign] = useState(true);

  const overlayBg = "bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500";
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500">
        <div className="h-4/5 w-4/5 bg-white relative rounded-lg">
          {!toggleSign ? (
            <div
              className={`  absolute top-0 left-0 h-full w-1/2 flex justify-center items-center z-20${
                toggleSign ? "" : "opacity-0 "
              }`}
            >
              <SignIn />
            </div>
          ) : (
            <div
              className={` absolute top-0 right-0 h-full w-1/2 flex justify-center items-center`}
            >
              <SignUp />
            </div>
          )}

          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${
              toggleSign ? "-translate-x-full" : ""
            }`}
          >
            <div
              className={`${overlayBg} relative -left-full h-full w-[200%]  ${
                toggleSign ? "translate-x-1/2" : "translate-x-0"
              }`}
            >
              {toggleSign ? (
                <div
                  className={`w-1/2 h-full absolute flex justify-center items-center top-0 left-0  ${
                    toggleSign ? "translate-x-0" : "-translate-x-[20%]"
                  }`}
                >
                  <LeftSignIn
                    toggleSign={toggleSign}
                    setToggleSign={setToggleSign}
                  />
                </div>
              ) : (
                <div
                  className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0  ${
                    toggleSign ? "translate-x-[20%]" : "translate-x-0"
                  }`}
                >
                  <RightSignUp
                    toggleSign={toggleSign}
                    setToggleSign={setToggleSign}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
// const [newName, setNewName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [password2, setPassword2] = useState("");
// const [firstName, setFirstName] = useState("");
// const [LastName, setLastName] = useState("");
// const [phonetNumber, setPhonetNumber] = useState("");
// const [updateList, setUpdateList] = useState("");
//   const [formError, setFormError] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [hasSubmited, setHasSubmited] = useState(false);

// const handleSubmit = (event) => {
//   event.preventDefault();
//   setUpdateList([
//     email,
//     password,
//     password2,
//     firstName,
//     LastName,
//     phonetNumber,
//   ]);
// };
//     setHasSubmited(true);

//     props.addToWishList(newWishList);
//     setFormError(newWishList);
//     setIsSubmit(true);

//     props.setInput("");
// setNewName("");
// setEmail("");
// setPassword("");

// const handleEmail = (event) => {
//   setEmail(event.target.value);
//   console.log(event.target.value);
// };

// const handleNewPassword = (event) => {
//   setPassword(event.target.value);
//   console.log(event.target.value);
// };
// const handleNewPassword2 = (event) => {
//   setPassword2(event.target.value);
//   console.log(event.target.value);
// };
// const handleFirstName = (event) => {
//   setFirstName(event.target.value);
//   console.log(event.target.value);
// };
// const handleLastName = (event) => {
//   setLastName(event.target.value);
//   console.log(event.target.value);
// };
// const handPhonetNumber = (event) => {
//   setPhonetNumber(event.target.value);
//   console.log(event.target.value);
// };

//   const handleClearButton = () => {
//     setHasSubmited(false);
//   };

// return (
//   <>
//     <h1>
//       Hi {updateList[3]}
//       {updateList[4]},
//     </h1>
{
  /* <FormBar />

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
      </Routes> */
}
//   </>
// );

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

// export default Form;
