import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Welcome visitor'
        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button
                    onClick={() => this.setState(() => ({
                        message: 'Thanks for subcribe'
                    }))}
                >
                    Subscribe
                </button>
            </div>
        );
    }
}

export default Message;