import Card from "../ui/Card";
import DegreeInput from "../ui/DegreeInput";
import Email from "../ui/Email";
import Input from "../ui/Input";
import Password from "../ui/Password";
import SignupMessage from "./SignupMessage";
import Button  from "../ui/Button";



const SignupIndex = () => 
{
    return (

        <div className="bg-[#DBF4F9] min-h-screen grid grid-cols-1 md:grid-cols-2">
            <SignupMessage></SignupMessage>
            <Card className="bg-white h-fit pt-10 pb-10 my-auto w-7/12 mx-auto">
                <Input label="Firstname" className="mb-5"/>
                <Input label="Lastname" className="mb-5" />
                <Email label="Email" className="mb-5"> </Email>
                <DegreeInput> </DegreeInput>
                <Password> </Password>
                <Button className="mx-auto mb-0">Signup</Button>
                

            </Card>
        </div>
    );
};


export default SignupIndex;


