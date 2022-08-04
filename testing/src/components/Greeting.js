import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const upperCaseHandler = (event) => {
    event.preventDefault();
    setChangeText(() => !changeText);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Another text</Output>}
      <button onClick={upperCaseHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
