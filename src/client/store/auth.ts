export interface AuthToken {
    email: string,
    accessToken: string
}

const AUTH_TOKEN_KEY = "owa-access-token";

export function loggedIn(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
}

export function getAuthToken(): AuthToken {
    let authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    
    if (authToken) {
        return JSON.parse(authToken);
    }
    
    return null;
}

export function setAuthToken(email: string, accessToken: string) {
    let authToken = {
        email: email,
        accessToken: accessToken
    };
    
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(authToken));
}