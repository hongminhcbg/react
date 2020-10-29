import React, { Component } from 'react';  

class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logoutURL: props.logoutURL,
            redirectTo: props.redirectTo,
            clientID: props.clientID,
        }    
    }

    logout = () => {
        console.log('logout success', this.state.logoutURL, this.state.redirectTo, this.state.clientID);
        window.location.href = this.state.logoutURL + '?client_id=' + this.state.clientID + '&returnTo=' + this.state.redirectTo;
    }


    render(){
        return (
            <button onClick={this.logout}>
                Logout
            </button>
        );
    }
}

export default Logout