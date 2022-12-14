import React, { Component } from "react";

class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.cbRef = null;
		this.setCbRef = (element) => {
			this.cbRef = element;
		};
		this.clickHandler = this.clickHandler.bind(this);
	}
	componentDidMount() {
		if (this.cbRef) {
			this.cbRef.focus();
		}
		console.log(this.inputRef);
	}
	clickHandler() {
		if (this.cbRef) {
			alert(this.cbRef.value);
		}
		alert(this.inputRef.current.value);
	}
	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
