import React, { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");

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
          props.setUsername(newUsername);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};
