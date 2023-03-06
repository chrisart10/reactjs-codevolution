import React, { useEffect } from "react";

function ChildFour({ children, name }) {
  console.log("ChildFour component Render");
  const [date, setDate] = React.useState(new Date());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <div>
      <div>ChildFour Component</div>
      <div>
        {name}. Its currently {date.getHours()}:{date.getMinutes()}:
        {date.getSeconds()}
      </div>
      {children}
    </div>
  );
}

export const MemoizedChildFour = React.memo(ChildFour);
