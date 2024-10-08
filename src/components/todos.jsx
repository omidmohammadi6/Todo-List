import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { todos } = useContext(TodoContext);
  console.log(todos, "todos");

  return (
    <div className="">
      {todos.map((todo) => (
        <div>
          <TodoItem key={todo.id} todo={todo} />
        </div>
      ))}
    </div>
  );
}
