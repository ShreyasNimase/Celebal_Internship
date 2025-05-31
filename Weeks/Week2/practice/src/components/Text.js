import React, { useState } from "react";
import { useEffect } from "react";

export default function Text() {
  const [Text, setText] = useState();

  // case 1 : EveryTime when text componet is render
  useEffect(() => {
    alert("Everytime when component is render");
  });

  //case 2 : only once for first time component render
  useEffect(() => {
    alert("Text Component Mounted");
  }, []);

  //case 3 : when components state is updated
  // when any state changes whole componet is re-rendered
  useEffect(() => {
    alert("Text Component is Updated");
  }, [Text]);

  // case 4 : when Component is unmounted
  useEffect(() => {
    return alert("Text Component is Unmounted");
  }, []);

  return (
    <div>
      <input onChange={(event) => setText(event.target.value)}></input>
      <h1>{Text}</h1>
    </div>
  );
}
