import { useState, createContext } from "react";
import { MemoizedChildA } from "./ContextChildren";
export const CountContext = createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {/* <MemoizedChildA /> */}
        {children}
      </CountProvider>
    </>
  );
};
