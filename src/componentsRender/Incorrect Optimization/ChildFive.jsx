import React from "react";

function ChildFive({ name, person, handlerClick }) {
  console.log("ChildFive component Render");
  return (
    <div>
      <div>ChildFive Component</div>
      {name}
      {person.fname}
      {person.lname}
    </div>
  );
}

export const MemoizedChildFive = React.memo(ChildFive);
