import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const TokenInformation = () => {
    const {
        isAuthenticated,   
        getAccessTokenSilently,
        getIdTokenClaims,
    } = useAuth0();

    const [data, setData] = useState(null); 
    const [idToken, setIDToken] = useState(null); 

    useEffect(() => {
        (async () => {
        try {
            const token = await getAccessTokenSilently();
         setData(token);
        } catch (e) {
            console.error(e);
          }
        })();
    }, [getAccessTokenSilently]);

    useEffect(() => {
        (async () => {
        try {
            const token = await getIdTokenClaims();
            setIDToken(token);
        } catch (e) {
            console.error(e);
          }
        })();
    }, [getIdTokenClaims]);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
      }
    
      return (
          <div> 
              <h1> Access Token <br/> </h1>
              <h2> {JSON.stringify(data)} </h2>
              
              <br/>
              <br/>
              <h1> ID Token </h1>  
              <h2> {JSON.stringify(idToken)} </h2>
          </div>
      );
};

export default TokenInformation;
