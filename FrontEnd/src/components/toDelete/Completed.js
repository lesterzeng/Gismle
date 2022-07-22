import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../../store/getThingsDone";

const Completed = (props) => {
  const dispatch = useDispatch();
  const storeCompletedList = useSelector(
    (state) => state.getThingsDone.completedList
  );
  // console.log(props.tasks);
  //==list of todolist==/

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
              Completed (╯ ͡° ͜ʖ ͡°)╯┻━┻
            </h1>
          </div>
          <form
          // onSubmit={props.handleTodoTasks}
          ></form>
          {storeCompletedList.map((d, i) => (
            <>
              <div
                key={i}
                className="rounded overflow-hidden shadow-lg bg-white border-b-4"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{d.actionTitle}</div>
                  <p className="text-gray-700 text-base">{d.actionDesc}</p>
                </div>
                <div class="flex bg-white p-2 w-full justify-center space-x-10">
                  <button
                    class="min-w-auto w-20 h-10 bg-blue-300 p-2 rounded-t-xl hover:bg-blue-500 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#CardModalInfo"
                    onClick={() => handleOpenCardModal(d._id, d.status)}
                  >
                    Info
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Completed;
