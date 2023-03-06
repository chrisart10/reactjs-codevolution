import React from "react";

function ChildThree({ children }) {
  console.log("ChildThree component Render");
  return (
    <div>
      <div>ChildThree Component</div>
      {children}
    </div>
  );
}

export const MemoizedChildThree = React.memo(ChildThree);
