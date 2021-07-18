import React from 'react';

let userAccessToken;
const clientID = ;
const redirectURI = 'http://localhost:3000/';

class Spotify extends React.Component {
    getAccessToken() {
        if(userAccessToken) {
            return userAccessToken;
        } else {
            userAccessToken = window.location.href.match(/access_token=([^&]*)/);
            const expirationTime = window.location.href.match(/expires_in=([^&]*)/);
        }
    }
    
    render() {
        return (
            // Need to update
        )
    }
}

export default Spotify;