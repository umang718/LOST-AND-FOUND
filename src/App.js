import { Route, Routes } from "react-router-dom";

import FeedCard from "./components/feed/FeedCard"
import ContactIndex from "./components/contactUs/ContactIndex";
import Navigation from "./components/layout/navbar/NavIndex";
import SignupIndex from "./components/signup/SignupIndex";
import LoginIndex from "./components/login/LoginIndex";
import ProfileIndex from "./components/profile/ProfileIndex";
import ChatIndex from "./components/chat/ChatIndex";
import { useEffect } from "react";
import { AuthProvider } from "./components/contexts/authContext";

const App = () =>  {
    return (
        <AuthProvider>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/" exact element = { <FeedCard /> } />
                <Route path = "/contactUs" exact element = { <ContactIndex /> } />
                <Route path = "/signUp" exact element = { <SignupIndex /> } />
                <Route path = "/login" exact element = { <LoginIndex /> } />
                <Route path = "/profile" exact element = { <ProfileIndex /> } />
                <Route path = "/chat" exact element = { <ChatIndex /> } />
            </Routes>
        </AuthProvider>
    );
}

export default App; 