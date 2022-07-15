import React from "react";
import "./TodoList.css";

const Ongoing = (props) => {
  let things = props.onGoingTask.map((d, i) => {
    return (
      <>
        <li key={i}>{d.onGoing}</li>
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
      <div className="OngoingContainer">
        <h1>On-going tasks</h1>
        <form onSubmit={props.handleOnGoingTask2}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="OngoingAdd"
            value={props.onGoing}
            onChange={props.handleOnGoingList}
          />
          <button type="submit">add</button>
          <card className="card">{things}</card>
        </form>
      </div>
    </>
  );
};

export default Ongoing;
