import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todos.reducer";

const defaultTodos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Get a Job", completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
