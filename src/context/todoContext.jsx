import { createContext, useState } from "react";

export const TodoContext = createContext();
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { text: "i do it1", id: 1, due: "2024-12-01" },
    { text: "i do it2", id: 2, due: "2024-12-01" },
    { text: "i do it3", id: 3, due: "2024-12-01" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { text: todo.task, id: todo.id, due: todo.due },
    ]);
  };
  const updateTodo = (id, value) => {
    console.log(value);

    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todos, text: value } : todo
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, setTodos, deleteTodo, addTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
