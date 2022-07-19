import React, { useState } from "react";
import Data from "../BoardData";

const ListOfBoards = () => {
  const [board, setnewboard] = useState([]);
  const [clicked, setClicked] = useState(false);
  //random btn--> show the lists of data(object (title decs))

  const handleAddBtn = (e) => {
    e.preventDefault();
    setClicked(clicked);
    console.log("handleclicked");
  };

  const displayData = Data.map(
    ({ BoardTitle, todolist, inProgress, completed }) => {
      return <h1> {BoardTitle}</h1>;
    }
  );

  // const handleViewMore = () => {
  //==View more==//
  // const displaySeeMore = Data.map(
  //   ({ BoardTitle, todolist, inProgress, completed }) => {
  //     return <h1>View More: {todolist}</h1>;
  //   }
  // );
  //note: clicked --> send ID--> use Effect--> card information

  // const displaySeeMore2 = Data.map(
  //   ({ BoardTitle, todolist, inProgress, completed }) => {
  //     return <h1>View More: {Data.Math.floor(Math.random())}</h1>;
  //   }
  // );

  // useEffect(() => {
  //   console.log("useEffect");
  //   return () => {
  //     if (clicked) {
  //       setClicked("hihi");
  //     }
  //   };
  // }, [clicked]);

  //======*1. add fetch to create a new board*//
  //======*1. add fetch to create a new board*//
  //======*1. add fetch to create a new board*//
  // fromBackEnd: board;

  return (
    <div>
      {/* {board} */}
      {/* {displayData} */}
      {/* {displaySeeMore} */}
      <div className="h-100 w-full flex items-center justify-center bg-blue-100 font-sans">
        <div className="bg-orange-100 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-3xl font-mono">
              Board Lists
            </h1>
            <div className="flex mt-4">
              <input
                onChange={(e) => setnewboard(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-zinc-50 bg-zinc-200 font-serif"
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
              <p className="w-full text-grey-700"> {displayData[0]}</p>
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green-700 hover:bg-green-700"
                // onClick={handleViewMore}
              >
                View More
              </button>

              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest"> {displayData[1]}</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green-700 hover:bg-green-700">
                View More
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">{displayData[2]}</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green-700 hover:bg-green-700">
                View More
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfBoards;
