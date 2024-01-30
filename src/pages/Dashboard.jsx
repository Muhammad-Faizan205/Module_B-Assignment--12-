import React from "react";
import { Todo_complete } from "../components/Todo_complete";

export const Dashboard = () => {
  const getDataHandle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("isLoggedIn", isLoggedIn);
  };

  return (
    <>
      <div>
        <Todo_complete />
      </div>
    </>
  );
};
