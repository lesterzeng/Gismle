import React, { useEffect } from "react";
import ListOfBoards from "../components/dashboard/ListOfBoards";
import { useSelector, useDispatch } from "react-redux";
import { getThingsDoneActions } from "../store/getThingsDone";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storeAllBoardsInfo = useSelector(
    (state) => state.getThingsDone.allBoardsInfo
  );

  const storetokenAccess = useSelector(
    (state) => state.getThingsDone.token.access
  );
  console.log(storetokenAccess);
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
          navigate("/dashboard");
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
    dispatch(getThingsDoneActions.clearLoginData());
  }, []);

  return (
    <div>
      <ListOfBoards />
    </div>
  );
};

export default Dashboard;
