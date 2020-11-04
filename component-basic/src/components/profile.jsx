import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const {   
        isAuthenticated,
        user,
        loginWithPopup,
        logout,
    } = useAuth0();

    if(!isAuthenticated) {
        return (
            <div>
                <h2> Please login go get profile </h2>
                <button onClick={loginWithPopup}> Login </button>
            </div>
        )
    } 

    return (
        <div>
            <img src={user.picture} alt='avatar' />
            <h2> {JSON.stringify(user)} </h2>
            <button onClick={logout}> Logout </button>
        </div>
    )
}

export default Profile;