import TodoItems from "./components/todo-items";
import { useState, useEffect } from "react";
import classes from "./styles.module.css";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();
      if (details) {
        setTodoDetails(details);
        setErrorMsg("");
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setErrorMsg("");
        setOpenDialog(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchListOfTodoList() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchListOfTodoList();
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" width={650} height={650} />;
  }
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>TODO APP</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItems
                todo={todoItem}
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
              />
            ))
          : ""}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}
export default App;
