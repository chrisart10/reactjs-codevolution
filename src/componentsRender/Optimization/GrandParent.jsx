import { useState } from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

function GrandParent() {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((prev) => prev + 1)}>
        Grand Parent Button {newCount}
      </button>
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default GrandParent;
