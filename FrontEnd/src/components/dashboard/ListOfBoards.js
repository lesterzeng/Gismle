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

  const handleOpenEditBoardModal = (boardId) => {
    console.log(boardId);
    dispatch(
      getThingsDoneActions.openEditBoardModal({
        boardModalId: boardId,
      })
    );
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-blue-100 font-sans">
        <div className="bg-orange-100 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-3xl font-mono">
              Board Lists
            </h1>
            <form>
              <div className="flex mt-4">
                <input
                  // onChange={(e) => setnewboard(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-black bg-zinc-200 font-serif"
                  placeholder="Add Board here"
                  onChange={handleChange}
                  value={inputBoardTitle}
                />
                <button
                  type="submit"
                  className="min-w-auto w-14 h-14 bg-red-300 p-2 rounded-full hover:bg-red-500 text-white font-semibold transition-rotation duration-300 hover:-rotate-45 ease-in-out"
                  onClick={() => {
                    addBoard();
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          {storeAllBoardsInfo.map((board, i) => (
            <div key={board._id}>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-700"> {board.title}</p>

                {/* <div class="bg-white p-4"> */}
                <button
                  className="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
                  //   onClick={() => {
                  //     navigate(`/cards/${board._id}`);
                  //   }}
                >
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#editBoardModal"
                    onClick={() => handleOpenEditBoardModal(board._id)}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                    Edit
                  </button>
                </button>
                <button
                  className="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
                  onClick={() => {
                    navigate(`/board/${board._id}`);
                  }}
                >
                  <svg
                    class="w-6 h-6 dark:text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                  View
                </button>

                <button
                  className="inline-flex items-center px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                  onClick={() => handleRemove(board._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
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
