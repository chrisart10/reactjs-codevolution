import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			comments: "",
			topic: "react",
		};
		this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
		this.handlerCommentsChange = this.handlerCommentsChange.bind(this);
		this.handlerTopicChange = this.handlerTopicChange.bind(this);
	}
	handlerUsernameChange = (event) => {
		console.log(event.target.value);
		this.setState({
			username: event.target.value,
		});
	};
	handlerCommentsChange = (event) => {
		console.log(event.target.value);
		this.setState({
			comments: event.target.value,
		});
	};
	handlerTopicChange = (event) => {
		console.log(event.target.value);
		this.setState({
			topic: event.target.value,
		});
	};
	handlerSubmit = (event) => {
		event.preventDefault();
		alert(
			`${this.state.username} ${this.state.comments} ${this.state.topic}`
		);
	};

	render() {
		return (
			<form onSubmit={this.handlerSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						id="username"
						type="text"
						value={this.state.username}
						onChange={this.handlerUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor="comments">Comments</label>
					<textarea
						id="comments"
						value={this.state.comments}
						onChange={this.handlerCommentsChange}
					></textarea>
				</div>
				<div>
					<label htmlFor="topic">Topic:</label>
					<select
						name="topic"
						id="topic"
						value={this.state.topic}
						onChange={this.handlerTopicChange}
					>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
