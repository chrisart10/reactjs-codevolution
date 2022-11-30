import React from "react";
import ClassCounter from "./components2/ClassCounter";
import ClassCounterOne from "./components2/ClassCounterOne";
import ClassMouse from "./components2/ClassMouse";
import HookCounter from "./components2/HookCounter";
import HookCounterFour from "./components2/HookCounterFour";
import HookCounterOne from "./components2/HookCounterone";
import HookCounterThree from "./components2/HookCounterThree";
import HookCounterTwo from "./components2/HookCounterTwo";
import HookMouse from "./components2/HookMouse";
import IntervalClassCounter from "./components2/IntervalClassCounter";
import IntervalHookContainer from "./components2/IntervalHookCounter";
import MouseContainer from "./components2/MouseContainer";
import DataFetching from "./components2/DataFetching";
import ComponentC from "./components2/ComponentC";
import CounterOne from "./components2/CounterOne";
import CounterTwo from "./components2/CounterTwo";
import CounterThree from "./components2/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
	return (
		<div className="App">
			{/* <ClassCounter />
			<HookCounter />
			<HookCounterTwo />
			<HookCounterThree />
			<HookCounterFour /> */}
			{/* <ClassCounterOne /> */}
			{/* <HookCounterOne /> */}
			{/* <ClassMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClassCounter />
			<IntervalHookContainer /> */}
			{/* <DataFetching /> */}
			{/* <UserContext.Provider value={"Vishwas"}>
				<ChannelContext.Provider value={"Codevolution"}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* <CounterOne /> */}
			{/* <CounterTwo /> */}
			<CounterThree />
		</div>
	);
}

export default App;
