import React from "react";

type Props = {
  text: string;
};

const TodoItem: React.FC<Props> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
