import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState(todo.text);

  // Sync the input value with the current todo.text in case the todo is updated elsewhere
  useEffect(() => {
    setValue(todo.text);
  }, [todo.text]);

  // Handle updating the todo item
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (value.trim()) {
      updateTodo(todo.id, value); // Pass the updated text to updateTodo function
      setVisible(false); // Hide input after updating
    }
  };

  console.log(todo);

  return (
    <li className="flex items-center bg-red-100 gap-3 max-w-sm mx-auto mt-7 justify-between px-4 py-2 rounded-md shadow-sm">
      {isVisible ? (
        <form onSubmit={handleUpdateTodo} className="flex items-center gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="px-2 py-1 border rounded-md focus:ring focus:border-blue-400"
          />
          <button className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-600 transition">
            Update
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-x-2">
          <div className="grid">
            <h2>{todo.text}</h2>
            <h3>{todo.due}</h3>
          </div>
          <button
            onClick={() => setVisible(true)}
            className="bg-green-400 p-2 text-white rounded-md hover:bg-green-500 transition"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-400 p-2 rounded-md text-white hover:bg-red-500 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
