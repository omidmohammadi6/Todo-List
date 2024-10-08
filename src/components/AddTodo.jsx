import React, { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo = () => {
  // State for both task input and due date input
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Passing both task input and due date to addTodo
    addTodo({ task: taskInput, id: new Date(), due: dueDate });
    setTaskInput("");
    setDueDate("");

    console.log(taskInput, dueDate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8"
    >
      {/* Task Input Field */}
      <div className="w-full mb-4">
        <label
          className="block text-lg font-semibold text-white mb-2"
          htmlFor="taskInput"
        >
          Add a New Task
        </label>
        <input
          className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-300 ease-in-out"
          value={taskInput}
          name="taskInput"
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
      </div>

      {/* Due Date Input Field */}
      <div className="w-full mb-4">
        <label
          className="block text-lg font-semibold text-white mb-2"
          htmlFor="dueDate"
        >
          Due Date
        </label>
        <input
          className="w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-300 ease-in-out"
          value={dueDate}
          name="dueDate"
          onChange={(e) => setDueDate(e.target.value)}
          type="date" // This input type is for dates
          placeholder="Enter the due date"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:scale-110"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
