import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todos.reducer";

const defaultTodos = [
  { id: 1, task: "First todo example", completed: true },
  { id: 2, task: "Second todo example", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
