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

function App() {
	return (
		<div className="App">
			<Greet />
			<Welcome />
			<Message />
			<GreetProps name="christian" />
			<GreetProps name="christian">
				<h2>Bienvenido</h2>
			</GreetProps>
			<GreetProps name="Batman">
				<button>hit the button</button>
			</GreetProps>
			<Counter />
			<GreetProps name="Batman">
				<Counter />
			</GreetProps>
			<WelcomeProps name={"Bruce Wayne"} heroName="Batman" />
			<UserGreeting />
			<NameList />
			<Stylesheet primary={true} />
			<Inline />
			<h1 className="error">Error</h1>
			<h1 className={styles.success}>success</h1>
		</div>
	);
}

export default App;
