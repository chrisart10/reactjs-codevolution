import { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

function ParentFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishaws");
  console.log("ParentFive Render");
  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };
  const handlerClick = () => {};
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildFive
        name={name}
        // Both provocate re-render. Because is a new object.
        person={person}
        handlerClick={handlerClick}
      />
    </div>
  );
}

export default ParentFive;
