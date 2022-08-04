import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type Props = {
  onRemove: (id: string) => void;
  items: Todo[];
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={props.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
