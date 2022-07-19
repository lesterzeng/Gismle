import React from "react";

const InProgress = (props) => {
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
        <h1>In Progress</h1>
        <form onSubmit={props.handleOnGoingTask2}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="OngoingAdd"
            value={props.onGoing}
            onChange={props.handleOnGoingList}
          />
          <button type="submit">
            {" "}
            <svg
              class="w-6 h-6 dark:text-black "
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
          <card className="card">{things}</card>
        </form>
      </div>
    </>
  );
};

export default InProgress;
