import React from "react";

const Members = (props) => {
  return (
    <div id="login-box">
      <div className="left">
        <h1>Log in</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={props.handleNewName}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.handleNewPassword}
          />

          <input type="submit" name="signup_submit" value="log in " />
        </form>
      </div>
      <h5>
        (need to store in backend) User Name: {props.updateList[0]} Email:
        {props.updateList[1]} Password:{props.updateList[2]}
      </h5>

      <div className="right">
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>

        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </div>
  );
};

export default Members;
