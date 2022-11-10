import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn:true
        }
    }
    
    render() { 
        // ternary operator
        return (
            this.state.isLoggedIn?
            <h1>Hello Chris</h1> :
            <h1>Welcome Guest</h1>

        )
        // Variable if statement
        // let message
        // if (this.state.isLoggedIn){
        //     message = <h1>Hello Chris</h1>
        // } else{
        //     message = <h1>Welcome Guest</h1>
        // }
        // return message

        // if statement
        // if(this.state.isLoggedIn){
        //     return (
        //         <h1>Hello Chris</h1>
        //     )
        // } else{
        //     return (
        //         <h1>Welcome Guest</h1>
        //     )
        // }

        // shorcut circuit operator
        // return ( 
        //     <div>
        //       { this.state.isLoggedIn &&  <h1>Hello Chris</h1>}
        //       { !this.state.isLoggedIn &&  <h1>Welcome Guest</h1>}
        //     </div>
        //  );
    }
}
 
export default UserGreeting;