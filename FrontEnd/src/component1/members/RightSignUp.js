import React from "react";

const RightSignUp = (props) => {
  return (
    <>
      <div className="p-8 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Don't have an account ?
        </h1>

        <h5 className="text-xl text-white">Start your journey in one click</h5>
        <div className="mt-16">
          <button
            type="button"
            className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
            onClick={() => {
              props.setToggleSign(!props.toggleSign);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSignUp;
