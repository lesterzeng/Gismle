import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  let things = props.tasks.map((d, i) => {
    return (
      <>
        <li key={i}>{d.todoList}</li>
        {/* {
          <button onClick={() => props.handleRemove(i)} className="button-74">
            remove
          </button>
        } */}
      </>
    );
  });

  return (
    <>
      <div className="todoContainer">
        <h1>ToDoList</h1>
        <form onSubmit={props.handleTodoTasks}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="todoAdd"
            onChange={props.handleTodoList}
            value={props.todoList}
          />
          <button type="submit">add</button>
          <li className="card">{things}</li>
        </form>
      </div>
    </>
  );
};
export default TodoList;
