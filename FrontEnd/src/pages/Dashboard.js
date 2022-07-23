import React, { useEffect } from "react";
import ListOfBoards from "../components/dashboard/ListOfBoards";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../store/getThingsDone";
import { useNavigate } from "react-router-dom";
import EditBoardModal from "../components/Board/Board_Modals/EditBoardModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storeAllBoardsInfo = useSelector(
    (state) => state.getThingsDone.allBoardsInfo
  );
  const storeButtonToggle = useSelector(
    (state) => state.getThingsDone.buttonToggle
  );

  const storeCardModalData = useSelector(
    (state) => state.getThingsDone.cardModalData
  );

  // const storetokenAccess = useSelector(
  //   (state) => state.getThingsDone.token.access
  // );
  // console.log(storetokenAccess);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/boards/display/boards/all", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          console.log("Board data obtained!");
          dispatch(
            getThingsDoneActions.storeAllBoardsInfo({
              allBoardsInfo: data,
            })
          );
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
  }, [storeButtonToggle]);

  useEffect(() => {
    fetch("http://localhost:5000/users/display/users/emailAndName", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          console.log("User data obtained!");
          dispatch(
            getThingsDoneActions.storeAllUsersInfo({
              allUsersInfo: data,
            })
          );
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
  }, []);

  return (
    <div className="bg-blue-700">
      <EditBoardModal />
      <ListOfBoards />
    </div>
  );
};

export default Dashboard;
