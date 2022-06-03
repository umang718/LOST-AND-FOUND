import Input from "./components/ui/Input"
import Password from "./components/ui/Password";
import Form from './components/ui/Form'
import Textarea from "./components/ui/Textarea";
import FeedCard from "./components/feed/FeedCard";
import Button from "./components/ui/Button";
// import NavItem from "./components/navbar/NavItem";
import Navigation from "./components/navbar/Navigation";
import LoginIndex from "./components/login/LoginIndex";
import HomepageIndex from "./components/feed/HomepageIndex";
import SignupMessage from "./components/signup/SignupMessage";
import SignupIndex from "./components/signup/SignupIndex";


const App = () =>  {
    return (
        <>
            {/* <NavItem></NavItem> */}
            {/* <Navigation></Navigation>
            <Form>
                <Input label = "Input Field" />
                <Password />
                <Textarea placeholder = "Description" row = "5" />
                <Button className = "mx-auto" type = "submit">Log In</Button>
            </Form>
            <div className = "m-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <FeedCard></FeedCard>
                <FeedCard></FeedCard>
                <FeedCard></FeedCard>
            </div> */}
            {/* <LoginIndex> 

            </LoginIndex> */}
            {/* <HomepageIndex>

            </HomepageIndex>  */}

            <SignupIndex>
            
            </SignupIndex>

        </> 
    );
}

export default App; 