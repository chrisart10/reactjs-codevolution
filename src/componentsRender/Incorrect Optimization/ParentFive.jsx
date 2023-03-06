import { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

function ParentFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishaws");
  console.log("ParentFive Render");
  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const momoizedPerson = useMemo(() => person, []);
  const handlerClick = () => {};
  const memoizedHandlerClick = useCallback(handlerClick, []);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildFive
        name={name}
        // Both provocate re-render. Because is a new object.
        person={momoizedPerson}
        handlerClick={memoizedHandlerClick}
      />
    </div>
  );
}

export default ParentFive;
