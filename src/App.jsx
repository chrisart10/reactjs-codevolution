import React from "react";
import ClassCounter from "./components2/ClassCounter";
import HookCounter from "./components2/HookCounter";
import HookCounterFour from "./components2/HookCounterFour";
import HookCounterThree from "./components2/HookCounterThree";
import HookCounterTwo from "./components2/HookCounterTwo";

function App() {
	return (
		<div className="App">
			<ClassCounter />
			<HookCounter />
			<HookCounterTwo />
			<HookCounterThree />
			<HookCounterFour />
		</div>
	);
}

export default App;
