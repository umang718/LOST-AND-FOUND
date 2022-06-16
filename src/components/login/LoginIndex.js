import { Link } from "react-router-dom"
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

import Password from "../ui/Password";
import LoginMessage from "./LoginMessage";

const LoginIndex = () => {
    return (
        <div className="bg-[#DBF4F9] min-h-screen grid grid-cols-1 md:grid-cols-2 ">
            <LoginMessage></LoginMessage>
            <Card className="bg-white h-fit pt-20 pb-10 my-auto w-7/12 mx-auto">
                <Input label="Username" className="mb-5" />
                <Password placeholder="Password"/>

                <div className="text-right text-xs relative bottom-4">
                    <span href=""> Forgot Password?</span>
                </div>
                

                <Button className="mx-auto mb-2">LOGIN</Button>
                <div>Don't have an account!</div>
                <Link to="/signUp">Create one</Link>
            </Card>
        </div>
    );
};

export default LoginIndex;
