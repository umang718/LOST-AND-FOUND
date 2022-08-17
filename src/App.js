import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import FeedCard from "./components/feed/FeedCard"
import ChatIndex from "./components/chat/ChatIndex";
import NotFound from "./components/errors/NotFound";
import LoginIndex from "./components/login/LoginIndex";
import SignupIndex from "./components/signup/SignupIndex";
import Navigation from "./components/layout/navbar/NavIndex";
import ProfileIndex from "./components/profile/ProfileIndex";
import ContactIndex from "./components/contactUs/ContactIndex";
import { AuthContext, AuthContextProvider } from "./components/contexts/authContext";

const App = () =>  {
    const authCntxt = useContext(AuthContext);
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/" element = { <FeedCard /> } />
                <Route path = "/contactUs" element = { <ContactIndex /> } />
                <Route path = "/signUp" element = { !authCntxt.isLoggedIn ? <SignupIndex /> : <Navigate to = "/" /> } />
                <Route path = "/login" element = { !authCntxt.isLoggedIn ? <LoginIndex /> : <Navigate to = "/" /> } />
                <Route path = "/profile" element = { authCntxt.isLoggedIn ? <ProfileIndex /> : <Navigate to = "/login" /> } />
                <Route path = "/chat/:chatId" element = { <ChatIndex /> } />
                <Route path = "/chat/" element = { <ChatIndex /> } />
                <Route path = "*" element = { <NotFound /> }></Route>
            </Routes>
        </>
    );
}

export default App;