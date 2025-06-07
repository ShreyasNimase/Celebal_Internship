import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>HOME </Link>
      <Link to={"/Menu"}>MENU </Link>
      <Link to={"/About"}>ABOUT </Link>
    </div>
  );
};
