import React, { Component } from 'react';  

class Login extends Component {
    randomString(length) {
        const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        array = array.map(x => validChars.charCodeAt(x % validChars.length));
        return String.fromCharCode(...array);
    }

    sha256(message) {
        let encoder = new TextEncoder();
        let data = encoder.encode(message);
        return window.crypto.subtle.digest('SHA-256', data);
    }

    urlEncodeB64(input) {
        const b64Chars = {'+': '-', '/': '_', '=': ''};
        return input.replace(/[\+\/=]/g, m => b64Chars[m]);;
      }

    bufferToBase64UrlEncoded(input) {
        var bytes = new Uint8Array(input);
        return this.urlEncodeB64(window.btoa(String.fromCharCode(...bytes)));
    }

    constructor(props) {
      super(props);
      this.state = props.state
    }
  
    handleClick() {
        var state = this.randomString(32);
        var codeVerifier = this.randomString(64);
        var codeChallenge = this.bufferToBase64UrlEncoded(this.sha256(codeVerifier))
        // console.log(this.state);
        // console.log(state);
        // console.log(codeVerifier);
        // console.log(codeChallenge);
        window.location.href = this.state.AuthEndPoint + '?' + 
        'audience=' + this.state.API_AUDIENCE + '&' +
        'redirect_uri=' + this.state.REDIRECT_URI + '&' + 
        'client_id=' + this.state.AUTH0_CLIENT_ID + '&' + 
        'response_type=code&' + 
        'code=openid%20profile%20email%20read%3Aappointments&' + 
        'code_challenge=' + codeChallenge + '&' + 
        'code_challenge_method=S256&' + 
        'state=' + state;
    }
  
    render() {
      return (
        <button onClick={() => this.handleClick()}>
          Click me to login
        </button>
      );
    }
  }

export default Login