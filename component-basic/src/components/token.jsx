import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// class TokenInformation extends React.Component {

//     constructor(props) {   
//         super(props);
//         this.state = {
//             accessTokken: null,
//             idToken: null,
//             status: 'Loading token',
//         }
//     }

//     render(){
//         const {
//             isAuthenticated,   
//             getAccessTokenSilently,
//             getIdTokenClaims,
//         } = useAuth0();

//         if(!isAuthenticated) {
//             return
//         }

//         getAccessTokenSilently().then(
//             (result) => {
//                 this.setState({
//                     accessToken: result, 
//                 })
//             }
//         ).catch(
//             (error) => {
//                 this.setState({
//                     accessToken: error, 
//                 })  
//             }
//         )

//         getIdTokenClaims().then(
//             (result) => {
//                 this.setState({
//                     idToken: result, 
//                 })
//             }
//         ).catch(
//             (error) => {
//                 this.setState({
//                     idToken: error, 
//                 })  
//             }
//         )

//         return (
//             <div>
//                 <h1> {this.state.status} </h1>
//                 <h2> {JSON.stringify(this.state.accessToken)} </h2>
//                 <h2> {JSON.stringify(this.state.idToken)} </h2>
//             </div>
//         );    
//     }
// }


const TokenInformation = () => {
    const {
        isAuthenticated,   
        getAccessTokenSilently,
        getIdTokenClaims,
    } = useAuth0();

    getAccessTokenSilently().then(
        (result) => {
            console.log('success', JSON.stringify(result));
            return (
                <h2> {JSON.stringify(result)} </h2>
            );
        }
    ).catch (
        (error) => {
            console.log('error');
            return <h2> Error {error.message} </h2>;                
        }
    )

    console.log('returned');
    return null
}

export default TokenInformation;
