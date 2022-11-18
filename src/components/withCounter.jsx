import React from "react";

function withCounter(WrappedComponent, incrementNumber = 1) {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0,
			};
			this.incrementCount = this.incrementCount.bind(this);
		}
		incrementCount() {
			this.setState((prevState) => {
				return { count: prevState.count + incrementNumber };
			});
		}

		render() {
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props}
				/>
			);
		}
	}
	return WithCounter;
}

export default withCounter;
