// import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { handleResponse } from '@helpers';
// import {AuthContext} from "../App";
// import { useContext } from 'react';

// const currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    // currentUser: useContext(AuthContext),
    // get currentUserValue () { return currentUser.user }
};

function login(username, password) {
    console.log('auth login called with',username,password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUser.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // currentUser.next(null);
}