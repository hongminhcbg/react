import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const {   
        isAuthenticated,
        loginWithPopup,
        logout,
        user,
    } = useAuth0();
    
    if (isAuthenticated) {
        return (
            <div>
                <h2> Login success </h2>
                <button onClick={logout}> Logout </button>
            </div>
        )
    }

    return (
        <div>
            <h2> Please login </h2>
            <button onClick={loginWithPopup}> Login </button>
        </div>
    )
}

export default Home;