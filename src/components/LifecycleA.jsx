import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
	constructor() {
		super();
		this.state = {
			name: "Vishwas",
		};
		this.handlerChange = this.handlerChange.bind(this);
		console.log("LifecycleA constructor");
	}
	handlerChange() {
		this.setState({
			name: "Christian",
		});
	}
	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps");
		console.log(state);
		return null;
	}
	componentDidMount() {
		console.log("LifecycleA componentDidMount");
	}
	shouldComponentUpdate() {
		console.log("LifecycleA shouldComponentUpdate");
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("LifecycleA getSnapshotBeforeUpdate");
		return null;
	}
	componentDidUpdate() {
		console.log("LifecycleA componentDidUpdate");
	}

	render() {
		console.log("lifecycleA render");

		return (
			<div>
				<h1>Lifecycle A {this.state.name}</h1>
				<button onClick={this.handlerChange}>Change state</button>
				<LifecycleB />
			</div>
		);
	}
}

export default LifecycleA;
