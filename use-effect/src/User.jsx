import React, {useEffect, useState} from 'react';
const User = (props) => {
    var secret = props.secret;
    const [users, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            var url = `https://${secret}.mockapi.io/users`
            var resp = await fetch(url, {
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            });
            var json = await resp.json();
            setUser(json);
        }

        fetchData();
    },[secret]);

    if(!users) {
        return (
            <div> 
                <h2> Loading </h2>
            </div>
        );
    }

    return (
        <div>
            {users.map(u => {
                return (
                    <h2> {u.name} </h2>
                );
            })}
        </div>
    );
}

export default User;