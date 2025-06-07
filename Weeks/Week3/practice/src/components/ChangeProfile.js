import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};
