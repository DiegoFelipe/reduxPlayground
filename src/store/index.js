import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conter: 0,
  showCounter: true,
};

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.conter++; // doesn't actually chage the state it seems to, because redux toolkit automatically fix it internally
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, payload) {
      state.counter += payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
