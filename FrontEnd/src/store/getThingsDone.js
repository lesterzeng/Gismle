import { createSlice } from "@reduxjs/toolkit";

const getThingsDoneSlice = createSlice({
  name: "getThingsDone",
  initialState: {
    ////////////////////////////////
    // User Login
    ////////////////////////////////

    //============================== Data to Send
    loginData: {
      email: "",
      password: "",
    },
    //============================== Data to Receive
    token: {
      access: "",
      refresh: "",
    },

    ////////////////////////////////
    // Registration of New User
    ////////////////////////////////

    //============================== Data to Send
    registerData: {
      email: "",
      password: "",
      password2: "",
    },

    //============================== Login Button state
    registerButton: true,
    ////////////////////////////////
    // Dashboard
    ////////////////////////////////
    //============================== Data to Receive
    allBoardsInfo: [],

    ////////////////////////////////
    // Error Handling
    ////////////////////////////////
    isError: false,
    errorMsg: "",
  },
  reducers: {
    ////////////////////////////////
    // User Login
    ////////////////////////////////
    //========== Store Login Data
    inputLoginDataEmail(state, action) {
      state.loginData.email = action.payload.email;
    },
    inputLoginDataPassword(state, action) {
      state.loginData.password = action.payload.password;
    },
    //========== Clear Login Data
    clearLoginData(state) {
      state.loginData = {
        email: "",
        password: "",
      };
    },
    //========== Store Login Response Data
    storeToken(state, action) {
      state.token = action.payload.token;
    },

    //========== Toggle Login Button
    toggleLoginButton(state) {
      state.loginButton = !state.loginButton;
    },

    ////////////////////////////////
    // Registration of New User
    ////////////////////////////////

    ////////////////////////////////
    // Dashboard
    ////////////////////////////////
    //============================== Store boards info
    storeAllBoardsInfo(state, action) {
      state.allBoardsInfo = action.payload.allBoardsInfo;
    },

    ////////////////////////////////
    // Error Handling
    ////////////////////////////////
    getError(state, action) {
      console.log("a");
      state.isError = true;
      state.errorMsg = action.payload.errorMsg;
      console.log("b");
    },
    resetError(state, action) {
      state.isError = false;
      state.errorMsg = "";
    },
    //========================== Fetch
    // useFetchUserLogin(state) {
    //   fetch("http://localhost:5000/users/login", {
    //     method: "post",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(state.loginData),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.status === "error") {
    //         console.log("error found");
    //         console.log(data.status);
    //         console.log(data.message);
    //         state.isError = true;
    //         state.errorMsg = data.message;
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("Connection Error", error.message);
    //     });
    // },
  },
});

export const getThingsDoneActions = getThingsDoneSlice.actions;

export default getThingsDoneSlice.reducer;
