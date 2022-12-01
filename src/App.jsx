import React, { useReducer } from "react";
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
import ComponentU from "./components2/ComponentU";
import ComponentX from "./components2/ComponentX";
import ComponentZ from "./components2/ComponentZ";
import DataFetchingOne from "./components2/DataFecthingOne";
import DataFetchingTwo from "./components2/DataFetchingTwo";
import ParentComponent from "./components2/ParentComponent";
import Counter from "./components2/Counter";
import FocusInput from "./components2/FocusInput";
import HookTimer from "./components2/HookTimer";
import DocTitleOne from "./components2/DocTitleOne";
import DocTitleTwo from "./components2/DocTitleTwo";
import CounterA from "./components2/CounterA";
import CounterB from "./components2/CounterB";
import UserForm from "./components2/UserForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
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
			{/* <CounterThree /> */}
			{/* 
			<CountContext.Provider value={{ count, dispatch }}>
				count: {count}
				<ComponentU />
				<ComponentX />
				<ComponentZ />
			</CountContext.Provider> */}
			{/* <DataFetchingOne /> */}
			{/* <ParentComponent /> */}
			{/* <Counter /> */}
			{/* <FocusInput /> */}
			{/* <HookTimer /> */}
			{/* <DocTitleOne />
			<DocTitleTwo /> */}
			{/* <CounterA />
			<CounterB /> */}
			<UserForm />
		</div>
	);
}

export default App;
