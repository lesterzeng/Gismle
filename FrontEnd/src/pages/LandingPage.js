import React, { useState } from "react";
import LeftSignIn from "../components/LandingPage/LeftSignIn";
import RightSignUp from "../components/LandingPage/RightSignUp";
import SignIn from "../components/LandingPage/SignIn";
import SignUp from "../components/LandingPage/SignUp";

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
