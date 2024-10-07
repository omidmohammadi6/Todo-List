import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    updateTodo(todo.id, value);
    setVisible(false);
    console.log(todo);
  };

  return (
    <li className="flex items-center bg-red-100 gap-3 max-w-sm mx-auto mt-7 justify-between px-4 py-2 rounded-md">
      {isVisible ? (
        <form onSubmit={handleUpdateTodo}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="rounded-md px-4 border">Update</button>
        </form>
      ) : (
        <div className="flex items-center gap-x-2">
          <h2>{todo.text}</h2>
          <button
            onClick={() => setVisible(true)}
            className="bg-green-400 p-2 text-teal-50 rounded-md"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-400 p-2 rounded-md text-teal-50"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
