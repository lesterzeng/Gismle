import React from "react";

const InProgress = (props) => {
  let things = props.lists.map((d, i) => {
    return (
      <>
        {/* <li key={i}>{d.todoList}</li> */}

        <div className="rounded overflow-hidden shadow-lg bg-white border-b-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{d.todoList}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className=" px-6  pb-2 text-right w-80 float-right">
            <div className="flex  p-2 w-full justify-center space-x-0">
              <button
                // onClick={() => props.handleRemove(i)}
                className="min-w-auto w-15 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
              >
                Delete
              </button>{" "}
              <button className="min-w-auto w-15 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                Edit
              </button>
              <button className="min-w-auto w-15 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
                Move
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="OngoingContainer">
        <h1>In Progress</h1>
        <form>
          <button type="submit"> </button>
          {/* {things} */}
        </form>
      </div>
    </>
  );
};

export default InProgress;
