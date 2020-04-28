import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default inititalTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", inititalTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
    toggleCompletitionTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
