import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../store/getThingsDone";

const OverLay = () => {
  const dispatch = useDispatch();
  const storeErrorMsg = useSelector((state) => state.getThingsDone.errorMsg);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-transparent"
      //   onClick={props.okayClicked}
    >
      <div className="bg-white shadow-xl rounded-xl fixed top-[30vh] left-[10%] w-[80%] z-100 overflow-hidden">
        <header className="bg-red-700 p-4">
          <h2>Error Found</h2>
        </header>
        <div className="p-4">
          <p>{storeErrorMsg}</p>
        </div>
        <footer className="p-4 flex justify-end">
          <button onClick={() => dispatch(getThingsDoneActions.resetError())}>
            Reset Error
          </button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = () => {
  return (
    <>
      {" "}
      {ReactDOM.createPortal(
        <OverLay />,
        document.querySelector("#modal-root")
      )}{" "}
    </>
  );
};

export default ErrorModal;
