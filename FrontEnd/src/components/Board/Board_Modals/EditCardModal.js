import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../../store/getThingsDone";

const EditCardModal = (props) => {
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

  const [inputEditCard, setInputEditCard] = useState({
    actionTitle: "",
    actionDesc: "",
  });

  const token = localStorage.getItem("token");

  let selectedCardData = storeToDoList.filter(
    (obj) => obj._id === storeCardModalId
  );

  switch (storeCardModalStatus) {
    case "toDo":
      selectedCardData = storeToDoList.filter(
        (obj) => obj._id === storeCardModalId
      );
      break;
    case "inProgress":
      selectedCardData = storeInProgressList.filter(
        (obj) => obj._id === storeCardModalId
      );
      break;
    case "complete":
      selectedCardData = storeCompletedList.filter(
        (obj) => obj._id === storeCardModalId
      );
      break;
    default:
      console.log("Wrong status");
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setInputEditCard((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const updateCardInfo = () => {
    fetch(`http://localhost:5000/boards/update/card`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        cardId: storeCardModalId,
        boardId: props.boardId,
        status: storeCardModalStatus,
        actionTitle: inputEditCard.actionTitle,
        actionDesc: inputEditCard.actionDesc,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        if (!data.status) {
          console.log("Card Moved!", data);
          console.log(props.nextStatus);
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
    setInputEditCard({
      actionTitle: "",
      actionDesc: "",
    });
  };

  const closeEditCardModal = () => {
    setInputEditCard({
      actionTitle: "",
      actionDesc: "",
    });
  };

  return (
    <>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="editCardModal"
        tabindex="-1"
        aria-labelledby="editCardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="editCardModalLabel"
              >
                Card - Settings
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeEditCardModal()}
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {/* <div className="flex justify-center"> */}
              <div className="mb-3 xl:w-96">
                <label
                  for="actionTitle"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Current Action Title:
                  {selectedCardData[0]
                    ? selectedCardData[0].actionTitle
                    : "No Title"}
                </label>
                <input
                  type="text"
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="actionTitle"
                  placeholder="Input New Card Title here"
                  onChange={handleChange}
                  value={inputEditCard.actionTitle}
                />
              </div>
              <div className="mb-3 xl:w-96">
                <label
                  for="actionDesc"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Current Action Description:{" "}
                  {selectedCardData[0]
                    ? selectedCardData[0].actionDesc
                    : "No Description"}
                </label>
                <input
                  type="text"
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="actionDesc"
                  placeholder="Input New Card Description here"
                  onChange={handleChange}
                  value={inputEditCard.actionDesc}
                />
              </div>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      "
                data-bs-toggle="modal"
                data-bs-target="#CardModalInfo"
                onClick={() => updateCardInfo()}
              >
                Save changes
              </button>
              <button
                type="button"
                className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          ml-1"
                data-bs-dismiss="modal"
                onClick={() => closeEditCardModal()}
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

export default EditCardModal;
