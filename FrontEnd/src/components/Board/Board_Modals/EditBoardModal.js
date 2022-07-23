import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../../store/getThingsDone";

const EditBoardModal = () => {
  const dispatch = useDispatch();
  // const storeAllUsersInfo = useSelector(
  //   (state) => state.getThingsDone.allUsersInfo
  // );
  const storeAllBoardsInfo = useSelector(
    (state) => state.getThingsDone.allBoardsInfo
  );
  const storeBoardModalId = useSelector(
    (state) => state.getThingsDone.boardModalId
  );

  const selectedBoardData = storeAllBoardsInfo.filter(
    (obj) => obj._id === storeBoardModalId
  );

  // const thisBoardMembers = selectedBoardData[0]
  //   ? selectedBoardData[0].members
  //   : "";
  // console.log(thisBoardMembers);

  // const storeAllUsersInfoId = storeAllUsersInfo.map((obj) => obj._id);

  // console.log(storeAllUsersInfoId);
  // const availableMembers = storeAllUsersInfoId.filter(
  //   (item) => !thisBoardMembers.includes(item)
  // );

  const token = localStorage.getItem("token");

  const [inputEditBoard, setInputEditBoard] = useState({
    title: "",
    desc: "",
    // member: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setInputEditBoard((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const updateBoardInfo = () => {
    fetch(`http://localhost:5000/boards/update/board`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        boardId: storeBoardModalId,
        title: inputEditBoard.title,
        desc: inputEditBoard.desc,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          console.log("Board Updated!", data);
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

    setInputEditBoard({
      title: "",
      desc: "",
    });
  };

  const closeEditBoardModal = () => {
    setInputEditBoard({
      title: "",
      desc: "",
    });
  };

  return (
    <div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="editBoardModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="editBoardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="editBoardModalLabel"
              >
                Board - Settings
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeEditBoardModal}
              ></button>
            </div>
            <div className="modal-body relative p-4">
              {/* <div className="flex justify-center"> */}
              <div className="mb-3 xl:w-96">
                <label
                  for="title"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Current Title:
                  {selectedBoardData[0]
                    ? selectedBoardData[0].title
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
                  id="title"
                  placeholder="Input New Board Title here"
                  onChange={handleChange}
                  value={inputEditBoard.title}
                />
              </div>
              <div className="mb-3 xl:w-96">
                <label
                  for="desc"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Current Description:{" "}
                  {selectedBoardData[0]
                    ? selectedBoardData[0].desc
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
                  id="desc"
                  placeholder="Input New Board Description here"
                  onChange={handleChange}
                  value={inputEditBoard.desc}
                />
              </div>
              {/* <div className="mb-3 xl:w-96">
                <label
                  for="member"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Current Board Member:
                  <div>
                    {selectedBoardData[0]
                      ? selectedBoardData[0].members.map((member) => (
                          <li>{member}</li>
                        ))
                      : ""}
                  </div>
                </label>
                <select
                  className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="member"
                  aria-label="member"
                  onChange={handleChange}
                  value={inputEditBoard.member}
                >
                  <option selected>-- Choose Existing Member --</option>
                  {availableMembers.map((availableMember) => (
                    <option value={availableMember}>{availableMember}</option>
                  ))}
                </select>
              </div> */}
              {/* </div> */}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => updateBoardInfo()}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                data-bs-dismiss="modal"
                onClick={closeEditBoardModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBoardModal;
