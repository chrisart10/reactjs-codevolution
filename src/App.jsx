import React from "react";
// import ArrayUseState from "./componentsRender/ImmutableState/ArrayUseState";
// import ObjectUseState from "./componentsRender/ImmutableState/ObjectUseState";
// import UseState from "./componentsRender/useState/useState";
// import Parent from "./componentsRender/ParentChild/Parent";
import ParentOne from "./componentsRender/Optimization/ParentOne";
import ChildOne from "./componentsRender/Optimization/ChildOne";
import GrandParent from "./componentsRender/Optimization/GrandParent";
import ParentTwo from "./componentsRender/Optimization/ParentTwo";
import ParentThree from "./componentsRender/Incorrect Optimization/ParentThree";
import ParentFour from "./componentsRender/Incorrect Optimization/ParentFour";
import ParentFive from "./componentsRender/Incorrect Optimization/ParentFive";
import { ContextParent } from "./componentsRender/Context/ContextParent";
import { ChildA } from "./componentsRender/Context/ContextChildren";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* This doesn't re-render "unecesary" because is pass as props. */}
      {/* <GrandParent /> */}

      {/* <ParentTwo /> */}

      {/* <ParentThree /> */}

      {/* <ParentFour /> */}

      {/* <ParentFive /> */}

      {/* <ContextParent /> */}

      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
