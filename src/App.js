import { Route, Routes } from "react-router-dom";

import FeedCard from "./components/feed/FeedCard"
import ContactIndex from "./components/contactUs/ContactIndex";
import Navigation from "./components/layout/navbar/Navigation";

const App = () =>  {
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path = "/" exact element = { <FeedCard /> } />
                <Route path = "/contactUs" exact element = { <ContactIndex /> } />
            </Routes>
        </>
    );
}

export default App; 