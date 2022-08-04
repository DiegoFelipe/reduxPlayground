import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const upperCaseHandler = (event) => {
    event.preventDefault();
    setChangeText(() => !changeText);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <p>Another text</p>}
      <button onClick={upperCaseHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
