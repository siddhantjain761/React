import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/todoreducer";

const store = configureStore({
  reducer: {
    todosObject: todoReducer, // wrap it in an object
  },
});

export default store