import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  //==list of todolist + remove ==//
  let things = props.tasks.map((d, i) => {
    return (
      <>
        <li key={i}>{d.todoList}</li>
        {<button onClick={() => props.handleRemove(i)}> remove</button>}
      </>
    );
  });

  return (
    <>
      <div className="todoContainer">
        <h1>TodoList</h1>
        <form onSubmit={props.handleTodoTasks}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="todoAdd"
            onChange={props.handleTodoList}
            value={props.todoList}
          />
          <button type="submit">
            <svg
              className="w-6 h-6 dark:text-black "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
          </button>
          <li className="card">{things}</li>
        </form>
      </div>
    </>
  );
};
export default TodoList;
