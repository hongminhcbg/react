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
      this.state = props.state;
      console.log(this.state);
      this.exchangeSuccess = false;
    }
  
    handleClick() {
        var state = this.randomString(32);
        var codeVerifier = this.randomString(64);
        this.state.codeVerifier = codeVerifier
        var codeChallenge = this.bufferToBase64UrlEncoded(this.sha256(codeVerifier))
        
        localStorage.setItem(state, codeVerifier);

        window.location.href = this.state.authEndpoint + '?' + 
        'audience=' + this.state.apiAudience + '&' +
        'redirect_uri=' + this.state.redirectURI + '&' + 
        'client_id=' + this.state.clientID + '&' + 
        'response_type=code&' + 
        'scope=openid%20profile%20picture%20picture%20email&' + 
        'code_challenge=' + codeChallenge + '&' + 
        'code_challenge_method=S256&' + 
        'state=' + state;
    }

    exchangeToken = (code, state) => {
      var code_verifier = localStorage.getItem(state);
      fetch(this.state.tokenEndpoint, {
        crossDomain:true,
        method: 'POST',
        body: new URLSearchParams({
          audience: this.state.apiAudience,
          client_id: this.state.clientID,
          redirect_uri: this.state.redirectURI,
          grant_type: 'authorization_code',
          code_verifier: code_verifier,
          code: code,
        }),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
      }).then(r => r.json()).then(
        (result) => {
          this.setState(
            {
              exchangeSuccess: true,
              result: result,
            }
          )
        }, 
        (error) => {
          this.setState (
            {
              exchangeSuccess: false,
              err: error,
            }
          )
        },
      );
    }

    componentDidMount(){
      let params = new URLSearchParams(window.location.search.substring(1));
      var code = params.get('code');
      var state = params.get('state');
      if(code != null && state != null && code.length > 0 && state.length > 0) {
        this.exchangeToken(code, state);
        return (
          <div>
            <h2> Exchanging </h2>
          </div>
        );
      }
    }
  
    render() {
      if (this.state.exchangeSuccess === true) {
          console.log(this.state.result);
          return (
            <div>
              <h1> Exchange token success </h1>
              <h2> Access Token: {this.state.result.access_token} </h2>
              <h2> ID Token: {this.state.result.id_token} </h2>
            </div>
          );
      } 

      return (
        <button onClick={() => this.handleClick()}>
          Click me to login
        </button>
      );
    }
  }

export default Login