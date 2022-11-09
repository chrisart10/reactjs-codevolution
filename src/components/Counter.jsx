import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.toCount = this.toCount.bind(this)
    }
    toCount() {
        this.setState((state) => ({
            count: state.count + 1
        }), () => {
            console.log(this)
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.toCount}>Count</button>
            </div>
        );
    }
}

