import Input from "./components/ui/Input"
import Password from "./components/ui/Password";
import Form from './components/ui/Form'
import Textarea from "./components/ui/Textarea";
import ItemBox from "./components/feed/ItemBox";
import Button from "./components/ui/Button";
// import NavItem from "./components/navbar/NavItem";
import Navigation from "./components/navbar/Navigation";


const App = () =>  {
    return (
        <>
            {/* <NavItem></NavItem> */}
            <Navigation></Navigation>
            <Form>
                <Input label = "Input Field" />
                <Password />
                <Textarea placeholder = "Description" row = "5" />
                <Button type = "submit">Log In</Button>
            </Form>
            <ItemBox></ItemBox>
        </> 
    );
}

export default App; 