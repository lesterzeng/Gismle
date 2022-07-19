import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
// import InProgress from "./InProgress";
// import Completed from "./Completed";

const Project = (props) => {
  const [todoList, setTodoList] = useState("");
  const [updateList, setUpdateList] = useState([]);
  const [toDoCards, setToDoCards] = useState([]);

  const [counter, setCounter] = useState(0);

  const storetokenAccess = useSelector(
    (state) => state.getThingsDone.token.access
  );

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/boards/display/cards/toDo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + storetokenAccess,
      },
      body: JSON.stringify({ boardId: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToDoCards(data);
      })
      .catch((error) => {
        console.log("Connection Error", error.message);
      });
  }, [counter]);

  const handleTodoTasks = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/boards/create/card", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + storetokenAccess,
      },
      body: JSON.stringify({ boardId: id, actionTitle: todoList }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Connection Error", error.message);
      });
    setCounter(counter + 1);

    // const printTasks = { todoList };
    // setUpdateList({ todoList });
    // props.addToNewTasks(printTasks);
    // console.log(printTasks);
    // console.log(updateList);
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
      {id}
      <TodoList
        handleTodoList={handleTodoList}
        handleTodoTasks={handleTodoTasks}
        tasks={toDoCards}
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
