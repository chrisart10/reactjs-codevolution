import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  console.log("Parent Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count - {count}</button>
      <button onClick={() => setCount(5)}>Count - {count}</button>
      <Child />
    </div>
  );
}

export default Parent;
