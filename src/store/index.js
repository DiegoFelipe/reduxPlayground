import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  conter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
