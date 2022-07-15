import React, { useState } from "react";
import TodoList from "./TodoList";
import Ongoing from "./Ongoing";
import Completed from "./Completed";

const Main = (props) => {
  const [todoList, setTodoList] = useState("");
  const [updateList, setUpdateList] = useState([]);
  const [onGoing, setOnGoing] = useState("");

  const handleTodoTasks = (event) => {
    event.preventDefault();
    const printTasks = { todoList };
    setUpdateList({ todoList });
    props.addToNewTasks(printTasks);
  };

  const handleTodoList = (event) => {
    setTodoList(event.target.value);
  };

  const handleOnGoingTask2 = (event) => {
    event.preventDefault();
    const printTasks2 = { onGoing };
    setUpdateList({ onGoing });
    props.addOnGoingTasks2(printTasks2);
  };

  const handleOnGoingList = (event) => {
    setOnGoing(event.target.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <TodoList
        handleTodoList={handleTodoList}
        handleTodoTasks={handleTodoTasks}
        tasks={props.tasks}
        updateList={updateList}
        todoList={todoList}
      />
      <Ongoing
        handleOnGoingList={handleOnGoingList}
        handleOnGoingTask2={handleOnGoingTask2}
        onGoingTask={props.onGoingTask}
        onGoing={onGoing}
      />
      <Completed />
    </div>
  );
};

export default Main;
