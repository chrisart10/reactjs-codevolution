import { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";

function ParentFour() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishaws");
  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildFour name={name} />
    </div>
  );
}

export default ParentFour;
