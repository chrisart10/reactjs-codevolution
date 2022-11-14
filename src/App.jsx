import { Counter } from "./components/Counter";
import Greet from "./components/Greet";
import { GreetProps } from "./components/GreetProps";
import Message from "./components/Message";
import NameList from "./components/NamesList";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import WelcomeProps from "./components/WelcomeProps";

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
		</div>
	);
}

export default App;
