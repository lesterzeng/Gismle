import React, { useState } from "react";
// import Data from "../BoardData";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../store/getThingsDone";
import { useNavigate } from "react-router-dom";

const ListOfBoards = (props) => {
  const [inputBoardTitle, setInputBoardTitle] = useState("");
  const dispatch = useDispatch();
  const storeAllBoardsInfo = useSelector(
    (state) => state.getThingsDone.allBoardsInfo
  );

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    e.preventDefault();
    setInputBoardTitle(e.target.value);
  };

  const addBoard = () => {
    fetch(`http://localhost:5000/boards/create/board`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: inputBoardTitle,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          console.log("Board Created!", data);
          dispatch(getThingsDoneActions.toggleButtonToggle());
        }
        if (data.status === "error") {
          console.log("got error");
          dispatch(
            getThingsDoneActions.getError({
              errorMsg: data.message,
            })
          );
        }
      })
      .catch((error) => {
        console.log("Connection Error", error.message);
      });
  };

  const handleRemove = (boardId) => {
    fetch("http://localhost:5000/boards/remove/board", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({ boardId: boardId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          console.log("Board data deleted!", data.message);
          dispatch(getThingsDoneActions.toggleButtonToggle());
        }
        if (data.status === "error") {
          console.log("got error");
          dispatch(
            getThingsDoneActions.getError({
              errorMsg: data.message,
            })
          );
        }
      })
      .catch((error) => {
        console.log("Connection Error", error.message);
      });
  };

  // const [board, setnewboard] = useState([]);
  // const [clicked, setClicked] = useState(false);
  //random btn--> show the lists of data(object (title decs))

  // const handleAddBtn = (e) => {
  //   e.preventDefault();
  //   setClicked(clicked);
  //   console.log("handleclicked");
  // };

  // const displayData = Data.map(
  //   ({ BoardTitle, todolist, inProgress, completed }) => {
  //     return <h1> {BoardTitle}</h1>;
  //   }
  // );

  // const handleViewMore = () => {
  // // ==View more==//
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
                // onChange={(e) => setnewboard(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black bg-zinc-200 font-serif"
                placeholder="Add Board here"
                onChange={handleChange}
                value={inputBoardTitle}
              />
              <button
                // onClick={handleAddBtn}
                type="submit"
                className="flex-no-shrink p-2 border-2 rounded text-blue-700 border-blue-500 hover:text-white hover:bg-green-700"
                onClick={() => {
                  addBoard();
                }}
              >
                Add
              </button>
            </div>
          </div>
          {storeAllBoardsInfo.map((board, i) => (
            <div key={board._id}>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-700"> {board.title}</p>
                <button
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green-700 hover:bg-green-700"
                  onClick={() => {
                    navigate(`/cards/${board._id}`);
                  }}
                >
                  View More
                </button>

                <button
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                  onClick={() => handleRemove(board._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfBoards;
