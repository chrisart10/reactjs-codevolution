import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				component E context {this.context}
				<ComponentF />
			</div>
		);
	}
}

export default ComponentE;
