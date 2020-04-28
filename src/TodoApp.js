import React from "react";
import useTodoState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initialTodos = [{ id: 1, task: "Default Todo", completed: false }];
  const {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    toggleCompletitionTodo,
  } = useTodoState(initialTodos);

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa ",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">
              TODOS WITH CONTEXT AND HOOKS
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              editTodo={editTodo}
              toggleCompletitionTodo={toggleCompletitionTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
