import React, { useState } from "react";

const ListOfBoards = () => {
  const [board, setnewboard] = useState("");

  const handleAddBtn = (e) => {
    e.preventDefault();
    //======*1. add fetch to create a new board*//
    //======*1. add fetch to create a new board*//
    //======*1. add fetch to create a new board*//
    // fromBackEnd: board;
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-blue-700 font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Project Board Lists</h1>
            <div className="flex mt-4">
              <input
                onChange={(e) => setnewboard(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500"
                placeholder="Add Board here"
              />
              <button
                onClick={handleAddBtn}
                type="submit"
                className="flex-no-shrink p-2 border-2 rounded text-blue-700 border-blue-500 hover:text-white hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-700">Project 1 (react)</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green hover:bg-green-700">
                View More
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">Project 2 (Node.js)</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green hover:bg-green-700">
                View More
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">Project 3 (react)</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green hover:bg-green-700">
                View More
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
            {/* <div className="flex mb-4 items-center"> */}
            {/* <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p> */}
            {/* <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey-700">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfBoards;
