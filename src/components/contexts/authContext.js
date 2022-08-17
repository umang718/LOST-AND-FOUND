import { useState, createContext } from "react";

export const AuthContext = createContext({
    token: "",
    isLoggedIn: false,
    userId: "",
    login: (token, userId) => {},
    logout: () => {},
});

//! Set Auto-Logout
export const AuthContextProvider = props => {
    const initialToken = localStorage.getItem("token");
    let userId = localStorage.getItem("user_id");
    const [token, setToken, setUser] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token, user_id) => {
        setToken(token);
        userId = user_id;
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
    }

    const logoutHandler = () => {
        setToken(null);
        userId = "";
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler, 
        logout: logoutHandler,
        userId: userId,
    };

    return (
        <AuthContext.Provider value = { contextValue }> { props.children } </AuthContext.Provider>
    );
};