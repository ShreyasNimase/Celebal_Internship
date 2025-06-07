import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>THIS IS HOME PAGE , user is : {username}</h1>
    </div>
  );
};
