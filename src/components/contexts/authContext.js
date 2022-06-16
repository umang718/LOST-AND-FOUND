import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = props => {
    const [ isLoggedIn, setAuthStatus ] = useState(false);
    return (
        <AuthContext.Provider value = {[isLoggedIn, setAuthStatus]}>
            { props.children }
        </AuthContext.Provider>
    );
};