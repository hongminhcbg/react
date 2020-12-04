import React from 'react';
import '../index.css'
import '../css/home.css'
import Sigin from './Sigin';
import Sigup from './Sigup';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigup: false,
        }
    }

    getSingin = () => {
        if( !this.state.isSigup) {
            return (
                <Sigin></Sigin>
            )
        }

        return (
            <div></div>
        )
    }

    getSigup = () => {
        if(this.state.isSigup) {
            return (
                <Sigup></Sigup>
            )
        }

        return (
            <div></div>
        )
    }

    setSigin = () => {
        this.setState({
            isSigup: false,
        })
    }

    setSigup = () => {
        this.setState({
            isSigup: true,
        })
    }

    render() {
        return (
            <div className="flex-column">
                <div className="flex-row container-tab">
                    <button onClick={this.setSigin}> Sigin </button>
                    <button onClick={this.setSigup}> Sigup </button>
                </div>
                {this.getSingin()}
                {this.getSigup()}
            </div>
        )
    }
}
export default Home;