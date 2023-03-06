import React from "react";

function ChildTwo() {
  console.log("ChildTwo component Render");
  return <div>ChildTwo Component</div>;
}

export const MemoizedChildTwo = React.memo(ChildTwo);
