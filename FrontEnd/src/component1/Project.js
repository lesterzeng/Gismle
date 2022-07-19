import React, { useState } from "react";
import TodoList from "./TodoList";
// import InProgress from "./InProgress";
// import Completed from "./Completed";

const Project = (props) => {
  const [todoList, setTodoList] = useState("");
  const [updateList, setUpdateList] = useState([]);

  const handleTodoTasks = (event) => {
    event.preventDefault();
    const printTasks = { todoList };
    setUpdateList({ todoList });
    props.addToNewTasks(printTasks);
    console.log(printTasks);
    console.log(updateList);
  };

  const handleTodoList = (event) => {
    setTodoList(event.target.value);
  };

  const handleDescription = (event) => {
    setTodoList(event.target.value);
  };

  // const addToInProgress = (item) => {
  //   setlists([...lists, item]);
  // };

  // const handleOnGoingTask2 = (event) => {
  //   event.preventDefault();
  //   const printTasks2 = { onGoing };
  //   setUpdateList({ onGoing });
  //   props.addOnGoingTasks2(printTasks2);
  // };

  const handleRemove = (index) => {
    const newList = props.tasks.filter((d, i) => i !== index);
    props.setTasks(newList);
  };

  return (
    <div>
      <TodoList
        handleTodoList={handleTodoList}
        handleTodoTasks={handleTodoTasks}
        tasks={props.tasks}
        updateList={updateList}
        todoList={todoList}
        handleRemove={handleRemove}
        addToInProgress={props.addToInProgress}
        lists={props.lists}
        // removeFromTodoList={props.removeFromTodoList}
        handleDescription={handleDescription}
        addToCompleted={props.addToCompleted}
      />
      {/* <InProgress addToInProgress={props.addToInProgress} />
      <Completed /> */}
    </div>
  );
};

export default Project;
