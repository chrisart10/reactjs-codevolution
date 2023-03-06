import { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

function ParentThree() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishaws");
  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("codevolution")}>Change name</button>
      <MemoizedChildThree name={name}>
        {/* React.memo Work well */}
        {/* hello {name} */}
        {/*React.memo work bad */}
        <strong>hello</strong> {name}
      </MemoizedChildThree>
    </div>
  );
}

export default ParentThree;
