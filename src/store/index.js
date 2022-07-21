import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import authSlice from "./slices/auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// counterSlice.actions creates unique identifiers for our actions like increment, decrement above, it's called action creators
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
