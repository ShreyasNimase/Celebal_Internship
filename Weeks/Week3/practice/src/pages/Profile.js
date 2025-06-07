import React from "react";
import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>THIS IS Profile PAGE, user is : {username} </h1>
      <ChangeProfile setUsername={setUsername} />
    </div>
  );
};
