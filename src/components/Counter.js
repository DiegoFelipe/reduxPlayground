import classes from "./Counter.module.css";

import { useSelector } from "react-redux";

const Counter = () => {
  // useSelector automatically subscribes this components to the store
  // it means that whenever this state from store changes this component re-renders
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
