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
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
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
			{/* <FRParentInput /> */}
			{/* <PortalDemo value={"Hello World from portal"} /> */}
			{/* <ErrorBoundary>
				<Hero heroName="Batman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			{/* <ClickCounter name="vishwas" />
			<HoverCounter name="vishwas" />
			 <ClickCounterTwo />
			<HoverCounterTwo /> */}
			{/* <User render={(isLoggedIn) => (isLoggedIn ? "vishwas" : "Guest")} /> */}
			{/* <Counter2
				render={(count, incrementCount) => (
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}
					/>
				)}
			/>
			<Counter2
				render={(count, incrementCount) => (
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}
					/>
				)}
			/> */}
			{/* <UserProvider value="Vishwas">
				<ComponentC />
			</UserProvider> */}
			{/* <PostList /> */}
			<PostForm />
		</div>
	);
}

export default App;
