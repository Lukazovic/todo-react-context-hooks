import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

export default function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo key={todo.id} {...todo} />
              {index < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}
