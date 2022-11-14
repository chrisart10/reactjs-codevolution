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

function App() {
	return (
		<div className="App">
			<Form />
		</div>
	);
}

export default App;
