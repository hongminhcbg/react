import React, { Component } from 'react';  

class Callback extends Component {
    constructor(props) {
        this.state = {
            code: URLSearchParams.get('code'),
            state: URLSearchParams.get('state'),
        }
    }

    render(){
        return (
            <div>
                <h2> Token: {this.state.code} </h2>
                <h2> IDToken: {this.state.state} </h2>
            </div>
        )
    
    }
}

export default Callback;

