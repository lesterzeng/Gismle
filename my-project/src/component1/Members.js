import React from "react";

const Members = (props) => {
  return (
    <div
      className="h-screen flex flex-col 
                    items-center justify-center"
    >
      <p className="text-green-700 text-xl mb-3">Welcome back!!</p>

      <form onSubmit={props.handleSubmit}>
        <input
          aria-label="Enter your email address"
          type="text"
          placeholder="Email address"
          className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
          onChange={props.handleEmail}
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="Password"
          className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2"
          onChange={props.handleNewPassword}
        />

        <button type="submit" className="bg-green-400 w-full mt-4">
          Login
        </button>
      </form>

      <h5>
        (need to store in backend) <br></br>Email: {props.updateList[0]}{" "}
        <br></br>
        password:
        {props.updateList[1]} <br></br>Password2:{props.updateList[2]}
      </h5>
    </div>
  );
};

export default Members;
