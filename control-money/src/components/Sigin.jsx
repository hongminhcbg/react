import React from 'react';
class Sigin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    setUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    setPassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    Singup = () => {

    }

    render() {
        return (
            <div>
                <h2> Sigin form </h2>
                <form onSubmit={this.Singup}>
                    <label> Username: </label>
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.setUsername}
                    />
                    <label> Password: </label>
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.setPassword}
                    />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default Sigin;