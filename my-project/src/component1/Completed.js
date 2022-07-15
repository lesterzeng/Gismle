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
            placeholder="  ....Empty........"
            className="completedAdd"
          />
        </form>
      </div>
    </>
  );
};

export default Completed;
