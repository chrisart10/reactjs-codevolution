import { Counter } from "./components/Counter";
import Greet from "./components/Greet";
import { GreetProps } from "./components/GreetProps";
import Message from "./components/Message";
import NameList from "./components/NamesList";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import WelcomeProps from "./components/WelcomeProps";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./Table";
import StateLab from "./components/StateLab";
import ParenComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FRInput from "./components/FRInputs";
import FRParentInput from "./components/FRParentInput";
function App() {
	return (
		<div className="App">
			{/* <Form /> */}
			{/* <LifecycleA /> */}
			{/* <FragmentDemo /> */}
			{/* <Table /> */}
			{/* <StateLab /> */}
			{/* <ParenComp /> */}
			{/* <RefsDemo /> */}
			<FRParentInput />
		</div>
	);
}

export default App;
