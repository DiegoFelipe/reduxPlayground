import React from "react";

type Props = {
  text: string;
  onRemove: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li>
      {props.text} <button onClick={props.onRemove}>X</button>
    </li>
  );
};

export default TodoItem;
