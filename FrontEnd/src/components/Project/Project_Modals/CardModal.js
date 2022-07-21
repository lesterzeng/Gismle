import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../../store/getThingsDone";

const CardModal = (props) => {
  const dispatch = useDispatch();
  const storeToDoList = useSelector((state) => state.getThingsDone.toDoList);
  const storeInProgressList = useSelector(
    (state) => state.getThingsDone.inProgressList
  );
  const storeCompletedList = useSelector(
    (state) => state.getThingsDone.completedList
  );
  const storeCardModalId = useSelector(
    (state) => state.getThingsDone.cardModalId
  );
  const storeCardModalStatus = useSelector(
    (state) => state.getThingsDone.cardModalStatus
  );
  const token = localStorage.getItem("token");
  const [inputComment, setInputComment] = useState("");

  let data = storeToDoList.filter((obj) => obj._id === storeCardModalId);

  switch (storeCardModalStatus) {
    case "toDo":
      data = storeToDoList.filter((obj) => obj._id === storeCardModalId);
      break;
    case "inProgress":
      data = storeInProgressList.filter((obj) => obj._id === storeCardModalId);
      break;
    case "complete":
      data = storeCompletedList.filter((obj) => obj._id === storeCardModalId);
      break;
    default:
      console.log("Wrong status");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputComment(e.target.value);
    console.log(data[0]);
  };

  const addComment = () => {
    fetch(`http://localhost:5000/boards/create/comment`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        boardId: props.boardId,
        cardId: data[0]._id,
        comment: inputComment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          console.log("Comment Created!", data);
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
    setInputComment("");
  };

  const removeComment = (commentId) => {
    fetch(`http://localhost:5000/boards/remove/comment`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        boardId: props.boardId,
        cardId: data[0]._id,
        commentId: commentId,
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

  return (
    <>
      {/* <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#CardModalInfo"
      >
        Launch demo modal dialog scrollable
      </button> */}

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="CardModalInfo"
        tabindex="-1"
        aria-labelledby="CardModalInfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md bg-gray-200">
              {/* <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="CardModalInfoLabel"
              >
                Modal title{JSON.stringify(storeCardModalData)}
              </h5> */}
              <div id="CardModalInfoLabel">
                <div className="font-bold text-xl mb-2">
                  {data[0] ? data[0].actionTitle : "No Title"}
                </div>
                <p className="text-gray-700 text-base">
                  {data[0] ? data[0].actionDesc : "No Desc"}
                </p>
              </div>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {/* {JSON.stringify(storeCardModalData)} */}
              {data[0]
                ? data[0].comments.map((comment, i) => (
                    <div key={i}>
                      <div className=" w-full flex  border-t border-grey-200 shadow-md ">
                        <form className="w-full p-4">
                          <div class="mb-2">
                            <div for="comment" className="text-base text-black">
                              {comment.commentValue}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="px-3 py-2 text-sm text-blue-100 bg-red-600 rounded float-right"
                            onClick={() => removeComment(comment._id)}
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  ))
                : "no Comment"}
              <br />
              <br />
              <p>added comment will appear above</p>
            </div>
            {/* <div className=" flex flex-wrap items-center justify-end p-4 border-t border-gray-200 "> */}
            <div className=" w-full flex  border-t border-grey-200 shadow-md ">
              <form action="" className="w-full p-4">
                <div class="mb-2">
                  <label for="comment" className="text-base text-gray-600">
                    Add a comment
                  </label>
                  <textarea
                    className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                    name="comment"
                    placeholder=""
                    value={inputComment}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
                  onClick={() => addComment()}
                >
                  Comment
                </button>
              </form>
            </div>
            {/* </div> */}
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md bg-gray-200">
              {" "}
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#editCardModal"
              >
                Edit Card Info
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;
