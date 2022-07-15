import React from "react";
import "./TodoList.css";

const Completed = () => {
  return (
    <>
      <div className="completedContainer">
        <h1>Completed-tasks</h1>
        <form>
          <input
            type="text"
            placeholder="Add a new task..."
            className="completedAdd"
          />
          <button>check</button>
        </form>
        <card className="card">still empty</card>
      </div>
    </>
  );
};

export default Completed;
