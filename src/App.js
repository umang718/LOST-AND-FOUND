import { AuthContextProvider } from "./components/contexts/authContext";
import Navigation from "./components/layout/navbar/Navigation";
// import Content from "./components/layout/Content";
// import Footer from "./components/layout/Footer";
// import FoundItem from "./components/Lost&Found/FoundItem";
// import LostItem from "./components/Lost&Found/LostItem";
import LoginIndex from "./components/login/LoginIndex";
// import SignupIndex from "./components/signup/SignupIndex";

const App = () =>  {
    return (
        <AuthContextProvider>
            {/* <SignupIndex> </SignupIndex> */}
            <Navigation></Navigation>
            <LoginIndex></LoginIndex>
            {/* <Content></Content>
            <Footer></Footer> */}
            {/* <FoundItem>

            </FoundItem> */}
            {/* <LostItem>

            </LostItem> */}
        </AuthContextProvider>
    );
}

export default App; 