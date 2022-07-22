import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../store/getThingsDone";

const InProgress = (props) => {
  const storeInProgressList = useSelector(
    (state) => state.getThingsDone.inProgressList
  );

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  // console.log(props.tasks);
  //==list of todolist==/
  const deleteCard = (cardId) => {
    fetch(`http://localhost:5000/boards/remove/card`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        cardId: cardId,
        boardId: props.boardId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          console.log("Card Deleted!", data);
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

  const moveCard = (cardId) => {
    fetch(`http://localhost:5000/boards/update/card`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        cardId: cardId,
        boardId: props.boardId,
        status: "complete",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          console.log("Card Moved!", data);
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

  const handleOpenCardModal = (cardId, status) => {
    console.log(cardId);
    dispatch(
      getThingsDoneActions.openCardModal({
        cardModalId: cardId,
        cardModalStatus: status,
      })
    );
  };

  return (
    <>
      <div className="relative p-4 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500  overflow-hidden shadow-xl hover:shadow-md rounded-lg">
        <div className="bg-transparent rounded shadow-xl mr-2 w-full">
          <div className=" bg-orange-600 rounded mb-4 justify-center flex">
            <h1 className=" text-grey-darkest text-3xl rounded mt-5 h-20 p-4">
              In Progress (¬‿¬)
            </h1>
          </div>
          <form
          // onSubmit={props.handleTodoTasks}
          ></form>
          {storeInProgressList.map((d, i) => (
            <>
              <div
                key={i}
                className="rounded overflow-hidden shadow-lg bg-white border-b-4"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{d.actionTitle}</div>
                  <p className="text-gray-700 text-base">{d.actionDesc}</p>
                </div>
                <div className=" px-6  pb-2 text-right w-80 float-right">
                  <div className="flex  p-2 w-full justify-center space-x-0">
                    <button
                      onClick={() => deleteCard(d._id)}
                      className="min-w-auto w-15 h-10 bg-red-300 p-2 rounded-l-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="min-w-auto w-15 h-10 bg-blue-300 p-2 rounded-none hover:bg-blue-500 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
                      data-bs-toggle="modal"
                      data-bs-target="#CardModalInfo"
                      onClick={() => handleOpenCardModal(d._id, d.status)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => moveCard(d._id)}
                      className="min-w-auto w-15 h-10 bg-green-300 p-2 rounded-r-full hover:bg-green-500 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out"
                    >
                      Move
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default InProgress;
