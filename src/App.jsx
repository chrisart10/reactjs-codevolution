import React from "react";
// import ArrayUseState from "./componentsRender/ImmutableState/ArrayUseState";
// import ObjectUseState from "./componentsRender/ImmutableState/ObjectUseState";
// import UseState from "./componentsRender/useState/useState";
// import Parent from "./componentsRender/ParentChild/Parent";
import ParentOne from "./componentsRender/Optimization/ParentOne";
import ChildOne from "./componentsRender/Optimization/ChildOne";
import GrandParent from "./componentsRender/Optimization/GrandParent";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* This doesn't re-render "unecesary" because is pass as props. */}
      <GrandParent />
    </div>
  );
}

export default App;
