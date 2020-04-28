import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Todo from "./Todo";

export default function TodoList({
  todos,
  removeTodo,
  editTodo,
  toggleCompletitionTodo,
}) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo
                key={todo.id}
                {...todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                toggleCompletitionTodo={toggleCompletitionTodo}
              />
              {index < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}
