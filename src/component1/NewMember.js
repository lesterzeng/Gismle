import React from "react";

const NewMember = (props) => {
  return (
    <>
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <form onSubmit={props.handleSubmit}>
            {/* <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={props.handleNewName}
            /> */}
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={props.handleEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={props.handleNewPassword}
            />
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
              onChange={props.handleNewPassword2}
            />
            <input type="submit" name="signup_submit" value="Sign me up" />
          </form>
          <h5>
            (need to store in backend) User Name: {props.updateList[0]} Email:
            {props.updateList[1]} Password:{props.updateList[2]}
          </h5>
        </div>
        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </>
  );
};

export default NewMember;
