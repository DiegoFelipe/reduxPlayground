import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // useSelector automatically subscribes this components to the store
  // it means that whenever this state from store changes this component re-renders
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increments</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrements</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
