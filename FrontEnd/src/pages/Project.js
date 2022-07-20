import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/Project/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../store/getThingsDone";
import InProgress from "../components/Project/InProgress";
import Completed from "../components/Project/Completed";
// import InProgress from "./InProgress";
// import Completed from "./Completed";

const Project = (props) => {
  const dispatch = useDispatch();
  // const storetokenAccess = useSelector(
  //   (state) => state.getThingsDone.token.access
  // );
  const storeButtonToggle = useSelector(
    (state) => state.getThingsDone.buttonToggle
  );
  const ListsOfCards = ["toDo", "inProgress", "complete"];

  const storeToDoList = useSelector((state) => state.getThingsDone.toDoList);

  const token = localStorage.getItem("token");

  const { id } = useParams();

  useEffect(() => {
    for (let i = 0; i < ListsOfCards.length; i++) {
      fetch(`http://localhost:5000/boards/display/cards/${ListsOfCards[i]}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify({ boardId: id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (!data.status) {
            console.log("Board data obtained!");
            switch (ListsOfCards[i]) {
              case "toDo":
                dispatch(
                  getThingsDoneActions.storeToDoList({
                    toDoList: data,
                  })
                );
                break;
              case "inProgress":
                dispatch(
                  getThingsDoneActions.storeInProgressList({
                    inProgressList: data,
                  })
                );
                break;
              case "complete":
                dispatch(
                  getThingsDoneActions.storeCompletedList({
                    completedList: data,
                  })
                );
                break;
              default:
                console.log("list error");
            }

            // navigate("/dashboard");
          }
          if (data.status === "error") {
            console.log("got error");
            dispatch(
              getThingsDoneActions.getError({
                errorMsg: data.message,
              })
            );
          }
          // setToDoCards(data);
        })
        .catch((error) => {
          console.log("Connection Error", error.message);
        });
    }
  }, [storeButtonToggle]);

  const handleRemove = (index) => {
    const newList = props.tasks.filter((d, i) => i !== index);
    props.setTasks(newList);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-6 mt-4 w-full">
          <TodoList boardId={id} />
          <InProgress boardId={id} />
          <Completed boardId={id} />
        </div>
      </div>
    </div>
  );
};

export default Project;
