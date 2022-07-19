import { configureStore } from "@reduxjs/toolkit";
import getThingsDoneReducer from "./getThingsDone";

const store = configureStore({
  reducer: { getThingsDone: getThingsDoneReducer },
});

export default store;
