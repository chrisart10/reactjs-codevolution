import React, { Component } from "react";

class StateLab2 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const myname = this.props.userName + " de panama";
		return (
			<div>
				{myname}
				<p>{this.props.element}</p>
				<button onClick={this.props.handlerChange}>Change</button>
			</div>
		);
	}
}

export default StateLab2;
