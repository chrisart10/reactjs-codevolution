import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  console.log("UseState Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count - {count}</button>
      <button onClick={() => setCount(5)}>Count - {count}</button>
    </div>
  );
}

export default UseState;
