import React from 'react';
import User from './User'
import '../css/user.css'
class Users extends React.Component {
    constructor(props) {
        super(props)
        let baseURI = `https://${props.secret}.mockapi.io`;
        this.state = {
            users: null,
            baseURI: baseURI,
            getUsersURL: `${baseURI}/users`,
            loadingError: false,
        }
    }

    render(){
        console.log(this.state);
        if (this.state.loadingError) {
            return (
                <h2> Loading users error </h2>
            );
        }

        if (this.state.users === null) {
            return (
                <h2> Loading </h2>
            );
        }

        return (
            <div>
                {
                this.state.users.map(u => {
                    return(
                        <div className="user-base"> 
                            <User 
                            Src={u.avatar} 
                            FullName={u.name} />     
                        </div>
                    );
                })}

            </div>
        )
    }

    componentDidMount() {
        fetch(this.state.getUsersURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
        .then(r => r.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    users: result,
                })
            }
        )
        .catch(
            (error) => {
                console.log(error);
                this.setState({
                    loadingError: true,
                })
            }
        )
    }
}

export default Users;