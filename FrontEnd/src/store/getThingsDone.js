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
    // token: {
    //   access: "",
    //   refresh: "",
    // },

    ////////////////////////////////
    // Registration of New User
    ////////////////////////////////

    //============================== Data to Send
    registerData: {
      name: "",
      email: "",
      password: "",
      password1: "",
    },

    //============================== Login Button state
    registerButton: true,
    ////////////////////////////////
    // Dashboard
    ////////////////////////////////
    //============================== Data to Receive
    allBoardsInfo: [],
    allUsersInfo: [],

    ////////////////////////////////
    // Project
    ////////////////////////////////
    //============================== Data to Receive
    toDoList: [],
    inProgressList: [],
    completedList: [],

    buttonToggle: true,
    ////////////////////////////////
    // Edit Board Modal
    ////////////////////////////////
    boardModalId: "",
    boardMembers: [],

    ////////////////////////////////
    // CardModal
    ////////////////////////////////

    cardModalId: "",
    cardModalStatus: "",

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
    //========== Store Register Data
    inputRegisterDataEmail(state, action) {
      state.registerData.email = action.payload.email;
    },
    inputRegisterDataName(state, action) {
      state.registerData.name = action.payload.name;
    },
    inputRegisterDataPassword(state, action) {
      state.registerData.password = action.payload.password;
    },
    inputRegisterDataPassword1(state, action) {
      state.registerData.password1 = action.payload.password1;
    },
    //========== Clear Register Dataa
    clearRegisterData(state) {
      state.registerData = {
        name: "",
        email: "",
        password: "",
        password1: "",
      };
    },

    ////////////////////////////////
    // Dashboard
    ////////////////////////////////
    //============================== Store boards info
    storeAllBoardsInfo(state, action) {
      state.allBoardsInfo = action.payload.allBoardsInfo;
    },

    //============================== Store boards info
    storeAllUsersInfo(state, action) {
      state.allUsersInfo = action.payload.allUsersInfo;
    },

    ////////////////////////////////
    // Project
    ////////////////////////////////
    //============================== Store boards info

    storeToDoList(state, action) {
      state.toDoList = action.payload.toDoList;
    },
    storeInProgressList(state, action) {
      state.inProgressList = action.payload.inProgressList;
    },
    storeCompletedList(state, action) {
      state.completedList = action.payload.completedList;
    },

    //============================== Toggle Button state in Project List

    toggleButtonToggle(state) {
      state.buttonToggle = !state.buttonToggle;
    },
    ////////////////////////////////
    // Edit Board Modal
    ////////////////////////////////
    openEditBoardModal(state, action) {
      state.boardModalId = action.payload.boardModalId;
    },

    ////////////////////////////////
    // CardModal
    ////////////////////////////////

    openCardModal(state, action) {
      state.cardModalId = action.payload.cardModalId;
      state.cardModalStatus = action.payload.cardModalStatus;
    },
    closeCardModal(state) {},

    ////////////////////////////////
    // Error Handling
    ////////////////////////////////
    getError(state, action) {
      state.isError = true;
      state.errorMsg = action.payload.errorMsg;
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
