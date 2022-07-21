import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++; // doesn't actually chage the state it seems to, because redux toolkit automatically fix it internally
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

// counterSlice.actions creates unique identifiers for our actions like increment, decrement above, it's called action creators
export const counterActions = counterSlice.actions;

export default store;
