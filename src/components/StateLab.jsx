import React, { Component } from "react";
import StateLab2 from "./StateLab2";

class StateLab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "Christian",
		};
		this.handlerChange = this.handlerChange.bind(this);
		this.element = "";
	}

	handlerChange() {
		this.setState({ userName: "El chico cool" });
		this.changeElement();
	}
	changeElement() {
		this.element = "Apareci";
	}
	render() {
		return (
			<div>
				<h1>{this.state.userName}</h1>
				<p>{this.element}</p>
				<StateLab2
					userName={this.state.userName}
					handlerChange={this.handlerChange}
					element={this.element}
				/>
			</div>
		);
	}
}

export default StateLab;
