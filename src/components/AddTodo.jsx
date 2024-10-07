import React, { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8"
    >
      <div className="w-full mb-4">
        <label
          className="block text-lg font-semibold text-white mb-2"
          htmlFor="input"
        >
          Add a New Task
        </label>
        <input
          className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-300 ease-in-out"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
